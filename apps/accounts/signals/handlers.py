from django.dispatch import receiver
# from django.urls import reverse
from django.conf import settings
from django_rest_passwordreset.signals import reset_password_token_created
from django.utils import timezone

from ..models import EmailVerificationToken
from apps.core.signals import order_created, user_email_updated
from ..tasks import send_new_order_mail, send_email_verification_mail, send_reset_password_email


@receiver(order_created)
def on_order_created(sender, **kwargs):
    context = {
        'order_id': kwargs['order']['id'],
        'order_total': kwargs['order']['total'],
        'order_phone': kwargs['order']['address']['phone'],
    }
    # print("\n\n\n")
    # print("Signal: ", kwargs['order'])
    # print("\n\n\n")
    send_new_order_mail.delay(context)


@receiver(user_email_updated)
def on_user_email_updated(sender, **kwargs):
    token = EmailVerificationToken.objects.create(
        user=kwargs["user"],
        expires_at=timezone.now() + timezone.timedelta(days=1)
    )
    context = {
        'first_name': kwargs["user"].first_name,
        'email': kwargs["user"].email,
        'verification_link': "{}/verify-email/{}/{}/".format(
            settings.REACT_APP_URL,
            kwargs["user"].id,
            token.token
        ),
    }
    send_email_verification_mail.delay(context)


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    context = {
        'username': reset_password_token.user.first_name,
        'email': reset_password_token.user.email,
        'reset_password_url': "{}/reset-password/{}".format(
            settings.REACT_APP_URL,
            reset_password_token.key
        )
        # 'reset_password_url': "{}?token={}".format(
        #     instance.request.build_absolute_uri(reverse('password-reset:reset-password-confirm')),
        #     reset_password_token.key)
    }
    send_reset_password_email.delay(context)
