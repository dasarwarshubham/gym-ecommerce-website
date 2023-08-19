from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import CustomUserManager


class Account(AbstractUser):
    GENDER_MALE = 'M'
    GENDER_FEMALE = 'F'
    GENDER_NA = 'NA'

    GENDER_CHOICES = (
        (GENDER_MALE,   'Male'),
        (GENDER_FEMALE, 'Female'),
        (GENDER_NA,     'Prefer Not to Say'),
    )

    username = None
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=12)
    gender = models.CharField(
        max_length=2, choices=GENDER_CHOICES, default=GENDER_NA, null=True)

    # this is required to set email as username field
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone', 'gender']

    def __str__(self) -> str:
        return self.first_name + ' ' + self.last_name

    class Meta:
        verbose_name = 'Account'
        verbose_name_plural = 'Accounts'
