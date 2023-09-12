from django.db import transaction
from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import User, EmailVerificationToken


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
            'password',
        )
        extra_kwargs = {'password': {'write_only': True, 'min_length': 6}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)

        with transaction.atomic():
            user = self.Meta.model(
                first_name=validated_data["first_name"],
                last_name=validated_data["last_name"],
                email=validated_data['email'],
            )

            if password is not None:
                user.set_password(password)
            user.save()

        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
        )


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    default_error_messages = {
        'required_fields': 'Both email and password are required.',
        'not_verified': 'User not verified. Please verify your email to log in.',
        'invalid_credentials': 'Invalid credentials provided.',
    }

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = authenticate(email=email, password=password)
            if user and user.is_active and user.is_verified:
                data['user'] = user
            elif not user:
                self.fail('invalid_credentials')
            elif not user.is_verified:
                self.fail('not_verified')
        else:
            self.fail('required_fields')

        return data


# Change Password Serializer


class UserChangePasswordSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    """

    model = User
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class EmailVerificationTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailVerificationToken
        fields = ('token',)
