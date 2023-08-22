from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator


class User(models.Model):
    # GENDER_MALE = 'M'
    # GENDER_FEMALE = 'F'
    # GENDER_NA = 'NA'

    # GENDER_CHOICES = (
    #     (GENDER_MALE,   'Male'),
    #     (GENDER_FEMALE, 'Female'),
    #     (GENDER_NA,     'Prefer Not to Say'),
    # )

    account = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True)
    # profile_image = models.ImageField()
    # gender = models.CharField(
    #     max_length=2, choices=GENDER_CHOICES, default=GENDER_NA, null=True)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.account.email

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class UserAddress(models.Model):
    full_name = models.CharField(max_length=255)
    address_line_1 = models.CharField(max_length=255)
    address_line_2 = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    zip = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    default = models.BooleanField(verbose_name="Default Address")
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="useraddress", null=True)

    def __str__(self) -> str:
        return str(self.city) + ", " + str(self.state)

    class Meta:
        verbose_name = 'User address'
        verbose_name_plural = 'User addresses'


# Equipments


def equipments_directory_path(instance, filename):
    return 'equipments/{0}/{1}'.format(instance.name.replace(" ", '-').lower(), filename)


class Equipment(models.Model):
    EQUIPMENT_TYPE_CARDIO = 'cardio'
    EQUIPMENT_TYPE_STRENGTH = 'strength'
    EQUIPMENT_TYPE_FLEXIBILITY = 'flexibility'
    EQUIPMENT_TYPE_CORE = 'core'
    EQUIPMENT_TYPE_RECOVERY = 'recovery'

    EQUIPMENT_TYPE_CHOICES = [
        (EQUIPMENT_TYPE_CARDIO, 'Cardio'),
        (EQUIPMENT_TYPE_STRENGTH, 'Strength'),
        (EQUIPMENT_TYPE_FLEXIBILITY, 'Flexibility'),
        (EQUIPMENT_TYPE_CORE, 'Core'),
        (EQUIPMENT_TYPE_RECOVERY, 'Recovery')
    ]

    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to=equipments_directory_path)
    type = models.CharField(
        max_length=11, choices=EQUIPMENT_TYPE_CHOICES, default=None)
    price = models.DecimalField(max_digits=8, decimal_places=2, validators=[
        MinValueValidator(1)])
    ratings = models.FloatField(
        validators=[MinValueValidator(0.0), MaxValueValidator(5.0)])
    reviews = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ['pk']
        verbose_name = 'Equipment'
        verbose_name_plural = 'Equipments'


def equipment_images_directory_path(instance, filename):
    print(instance, filename)
    return 'equipments/{0}/{1}'.format(instance.product.name.replace(" ", '-').lower(), filename)


class EquipmentImages(models.Model):
    product = models.ForeignKey(
        Equipment, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(
        upload_to=equipment_images_directory_path)

    class Meta:
        ordering = ['product']
        db_table = "product_image"
        verbose_name = 'Equipment Image'
        verbose_name_plural = 'Equipment Images'

    def __str__(self):
        return self.image.url
