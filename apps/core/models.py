from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

# Equipments


def equipments_directory_path(instance, filename):
    return 'equipments/images/{0}/{1}'.format(instance.name.replace(" ", '').lower(), filename)


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
