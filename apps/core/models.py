from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

# Equipments


def equipments_directory_path(instance, filename):
    return 'equipments/{0}/{1}'.format(instance.name.replace(" ", '').lower(), filename)


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
    return 'equipments/{0}/{1}'.format(instance.product.name.replace(" ", '').lower(), filename)


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
