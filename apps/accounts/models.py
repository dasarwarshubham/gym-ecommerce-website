from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import CustomUserManager
from knox.models import AuthToken as KnoxAuthTokenModel
from django.contrib.auth.models import Group as DjangoGroupModel


class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

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


# overriding names of knox AuthToken model
class AuthToken(KnoxAuthTokenModel):
    class Meta:
        proxy = True
        verbose_name = 'Active User'
        verbose_name_plural = 'Active Users'


# overriding names of django groups model
class Group(DjangoGroupModel):
    class Meta:
        proxy = True
        verbose_name = 'Group'
        verbose_name_plural = 'Groups'
