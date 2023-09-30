import uuid
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from .managers import CustomUserManager

# from knox.models import AuthToken as KnoxAuthTokenModel
# from django.contrib.auth.models import Group as DjangoGroupModel
# from django_rest_passwordreset.models import ResetPasswordToken as DjangoResetPasswordToken


class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_verified = models.BooleanField(default=False)

    # this is required to set email as username field
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self) -> str:
        return self.email
        # return self.first_name + ' ' + self.last_name

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class EmailVerificationToken(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="verification_token_user")
    token = models.UUIDField(default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()

    def is_expired(self):
        return self.expires_at < timezone.now()

    def __str__(self) -> str:
        return str(self.token)


# overriding names of knox AuthToken model
# class ResetPasswordToken(DjangoResetPasswordToken):
#     class Meta:
#         proxy = True
#         verbose_name = 'Reset password token'
#         verbose_name_plural = 'Reset password tokens'


# # overriding names of knox AuthToken model
# class AuthToken(KnoxAuthTokenModel):
#     class Meta:
#         proxy = True
#         verbose_name = 'Active User'
#         verbose_name_plural = 'Active Users'


# # overriding names of django groups model
# class Group(DjangoGroupModel):
#     class Meta:
#         proxy = True
#         verbose_name = 'Group'
#         verbose_name_plural = 'Groups'
