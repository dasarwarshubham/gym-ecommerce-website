from rest_framework import serializers
from django.db import transaction
from django.contrib.auth import authenticate

from .models import Account


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = (
            'id',
            'email',
            'password',
            'first_name',
            'last_name',
            'gender',
            'phone'
        )
        extra_kwargs = {'password': {'write_only': True, 'min_length': 6}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)

        with transaction.atomic():
            account = self.Meta.model(
                email=validated_data['email'],
                first_name=validated_data["first_name"],
                last_name=validated_data["last_name"],
                gender=validated_data["gender"],
                phone=validated_data["phone"]
            )

            if password is not None:
                account.set_password(password)
            account.save()

        return account


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('first_name', 'last_name', 'email', 'gender', 'phone')


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        errors = dict()

        if email and password:
            user = authenticate(email=email, password=password)
            if user and user.is_active:
                data['user'] = user
            else:
                # errors['error'] = "Incorrect credentials"
                raise serializers.ValidationError("Incorrect credentials")
        else:
            # errors['error'] = "Both email and password are required."
            raise serializers.ValidationError(
                "Both email and password are required.")

        if errors:
            print(errors)
            raise serializers.ValidationError(errors)

        return data
