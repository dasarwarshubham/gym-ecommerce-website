from rest_framework import serializers

from .models import Equipment


class EquipmentListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Equipment
        fields = ('id', 'name', 'type', 'image', 'price')

    def __str__(self) -> str:
        return self.name


class EquipmentDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Equipment
        fields = ('id', 'name', 'description', 'type',
                  'ratings', 'image', 'price')

    def __str__(self) -> str:
        return self.name
