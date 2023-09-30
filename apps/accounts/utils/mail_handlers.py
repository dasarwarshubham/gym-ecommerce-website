from django.conf import settings
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives, BadHeaderError


def send_verification_mail(context):
    try:
        subject = 'Welcome to Fitflex Family'
        from_email = settings.EMAIL_HOST_USER
        email_html_message = render_to_string(
            'email/verification_email.html', context)
        recipient_list = [context["email"]]

        mail = EmailMultiAlternatives(
            subject=subject,
            from_email=from_email,
            to=recipient_list
        )
        # mail.attach_file('apps/accounts/static/images/welcome.png')
        mail.attach_alternative(email_html_message, "text/html")
        mail.content_subtype = "html"
        mail.send()
        print("Email verification link sent")
    except BadHeaderError:
        print("Email verification link not sent")


def send_reset_password_mail(context):
    try:
        subject = 'Fitflex: Password Reset request'
        from_email = settings.EMAIL_HOST_USER
        email_html_message = render_to_string(
            'email/password_reset_email.html', context)
        recipient_list = [context["email"]]

        mail = EmailMultiAlternatives(
            subject=subject,
            from_email=from_email,
            to=recipient_list
        )
        mail.attach_alternative(email_html_message, "text/html")
        mail.content_subtype = "html"
        mail.send()
        print("Password reset link email sent")
    except BadHeaderError:
        print("Password reset link email not sent")


def send_new_order_mail_to_admin(context):
    try:
        subject = f'#{str(context["order_id"])} : New order recieved'
        from_email = settings.EMAIL_HOST_USER
        email_html_message = render_to_string(
            'core/new_order_email_admin.html', context)
        recipient_list = [settings.EMAIL_HOST_USER]

        mail = EmailMultiAlternatives(
            subject=subject,
            # body=message,
            from_email=from_email,
            to=recipient_list
        )
        mail.content_subtype = "html"
        mail.attach_alternative(email_html_message, "text/html")
        mail.send()
        print(f"New Order Email for #{context['order_id']} sent to admin")
    except BadHeaderError:
        print("New Order Email not sent to admin")


def send_new_order_mail_to_user(context):
    try:
        subject = f'#{str(context["order_id"])} : Order placed'
        from_email = settings.EMAIL_HOST_USER
        email_html_message = render_to_string(
            'core/new_order_email_user.html', context)
        recipient_list = [context["user_email"]]

        mail = EmailMultiAlternatives(
            subject=subject,
            # body=message,
            from_email=from_email,
            to=recipient_list
        )
        mail.content_subtype = "html"
        mail.attach_alternative(email_html_message, "text/html")
        mail.send()
        print(
            f"New Order Email for #{context['order_id']} sent to user({context['user_email']})")
    except BadHeaderError:
        print("New Order Email not sent to user")


def send_contact_us_form_to_admin(context):
    try:
        subject = f'Contact Form Submission from {context["name"]}'
        from_email = settings.EMAIL_HOST_USER
        message = f'''
            <p><strong>Name</strong>:       {context["name"]}</p>
            <p><strong>Email</strong>:      {context["email"]}</p>
            <p><strong>Subject</strong>:    {context["subject"]}</p>
            <p><strong>Message</strong>: <br/>{context["message"]}</p>
        '''
        recipient_list = [settings.EMAIL_HOST_USER]

        mail = EmailMultiAlternatives(
            subject=subject,
            body=message,
            from_email=from_email,
            to=recipient_list
        )
        mail.content_subtype = "html"
        mail.send()
    except BadHeaderError:
        print("New contact inquiry form not emailed to admin")
