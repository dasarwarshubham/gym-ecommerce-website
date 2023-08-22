import json
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import transaction
from drf_writable_nested.serializers import WritableNestedModelSerializer
from rest_framework import serializers
from .models import User, UserAddress, Equipment, EquipmentImages


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = [
            'first_name',
            'last_name',
            'email',
            'phone',
            'gender',
            'password'
        ]
        extra_kwargs = {
            'password': {'write_only': True},
        }


# class UserAddressSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserAddress
#         fields = (
#             "id",
#             "full_name",
#             "address_line_1",
#             "address_line_2",
#             "city",
#             "state",
#             "country",
#             "zip",
#             "phone",
#             "default"
#         )


# class UserSerializer(serializers.ModelSerializer):
#     account = AccountSerializer()
#     # first_name = serializers.SerializerMethodField()
#     # last_name = serializers.SerializerMethodField()
#     # email = serializers.SerializerMethodField()
#     # phone = serializers.SerializerMethodField()
#     # gender = serializers.SerializerMethodField()
#     address = UserAddressSerializer(source='useraddress', many=True)

#     # def get_first_name(self, obj):
#     #     return obj.account.first_name

#     # def get_last_name(self, obj):
#     #     return obj.account.last_name

#     # def get_email(self, obj):
#     #     return obj.account.email

#     # def get_phone(self, obj):
#     #     return obj.account.phone

#     # def get_gender(self, obj):
#     #     return obj.account.gender

#     class Meta:
#         model = get_user_model()
#         fields = [
#             'account',
#             # 'first_name',
#             # 'last_name',
#             # 'email',
#             # 'phone',
#             # 'gender',
#             'address',
#         ]


# class UserCreateSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
#     account = AccountSerializer()
#     address = UserAddressSerializer(source='useraddress', many=True)

#     class Meta:
#         model = get_user_model()
#         fields = [
#             "account",
#             'address',
#         ]

#     def create(self, validated_data):
#         account = self.context["account"]
#         address = None
#         if validated_data.get('useraddress'):
#             address = validated_data.pop('useraddress')

#         with transaction.atomic():
#             newuser = get_user_model().objects.create(
#                 account=account, **validated_data)
#             if address != None:
#                 UserAddress.objects.create(user=newuser, **address)
#             return newuser

#     def update(self, instance, validated_data):
#         if validated_data.get('useraddress'):
#             address = validated_data.get('useraddress')
#             address_serializer = UserAddressSerializer(data=address)

#             if address_serializer.is_valid(raise_exception=True):
#                 address = address_serializer.update(
#                     instance=instance.useraddress, validated_data=address_serializer.validated_data)
#                 validated_data["address"] = address

#         return super().update(instance, validated_data)


class UserAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAddress
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    account = AccountSerializer()
    address = UserAddressSerializer(source='useraddress', many=True)

    class Meta:
        model = User
        fields = ['account', 'address']

    def create(self, validated_data):
        model = get_user_model()
        account = self.context["account"]
        user_data = validated_data.pop('account')
        address = None
        if validated_data.get('useraddress'):
            address = validated_data.pop('useraddress')

        password = None
        if user_data.get('password'):
            password = user_data.pop('password')

        with transaction.atomic():
            account = model.objects.create(
                email=user_data['email'],
                first_name=user_data["first_name"],
                last_name=user_data["last_name"],
                gender=user_data["gender"],
                phone=user_data["phone"]
            )

            if password is not None:
                account.set_password(password)
            account.save()

            newuser = User.objects.create(
                account=account)
            if address != None:
                for data in address:
                    UserAddress.objects.create(user=newuser, **data)
            return newuser

    #### Update function here ####


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
