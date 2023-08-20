from rest_framework import serializers
from django.conf import settings
from .models import Equipment, EquipmentImages


class EquipmentImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentImages
        fields = ('id', 'image')
        ordering = ['id']
        extra_kwargs = {
            'product': {
                'write_only': True
            },
        }

    def get_image(self, obj):
        return f"{settings.HOST_URL}{obj.image.url}"


class EquipmentListSerializer(serializers.ModelSerializer):
    images = EquipmentImagesSerializer(many=True, read_only=True)

    class Meta:
        model = Equipment
        fields = ('id', 'name', 'type', 'image', 'price', 'images')

    def __str__(self) -> str:
        return self.name


class EquipmentDetailSerializer(serializers.ModelSerializer):
    images = EquipmentImagesSerializer(many=True, read_only=True)

    class Meta:
        model = Equipment
        fields = ('id', 'name', 'description', 'type',
                  'ratings', 'reviews', 'image', 'images', 'price')
