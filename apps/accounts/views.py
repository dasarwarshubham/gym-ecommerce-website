import uuid
from django.utils import timezone
from django.utils.decorators import method_decorator
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from knox.views import LoginView as KnoxLoginView
from knox.auth import TokenAuthentication
from .serializers import UserCreateSerializer, UserLoginSerializer, UserSerializer, UserChangePasswordSerializer
from .models import User, EmailVerificationToken
from .tasks import send_email_verification_mail

# from django.contrib.sites.shortcuts import get_current_site
# from django.urls import reverse


class AccountView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        id = request.user.id
        account = get_object_or_404(User, pk=id)
        serializer = UserSerializer(account)
        return Response(serializer.data)


# User Registrations View


class AccountRegisterView(APIView):
    """
    An endpoint for creating new user account.
    """
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = UserCreateSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            token = EmailVerificationToken.objects.create(
                user=user,
                expires_at=timezone.now() + timezone.timedelta(days=1)
            )

            verification_link = "{}/verify-email/{}/{}/".format(
                settings.REACT_APP_URL,
                serializer.data["id"],
                token.token
            )

            context = {
                'first_name': serializer.data["first_name"],
                'email': serializer.data["email"],
                'verification_link': verification_link,
            }
            send_email_verification_mail.delay(context)
            return Response("User created successfully", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# User Login View


class LoginView(KnoxLoginView):
    """
    An endpoint for user login.
    """
    permission_classes = (AllowAny, )

    # override post login response method to return custom response
    def get_post_response_data(self, request, token, instance):
        data = {
            'expiry': self.format_expiry_datetime(instance.expiry),
            'token': token
        }
        return data

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginView, self).post(request, format=None)


# Password Change View

class ChangePasswordView(generics.UpdateAPIView):
    """
    An endpoint for changing password.
    """
    model = User
    permission_classes = (IsAuthenticated,)
    serializer_class = UserChangePasswordSerializer

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response("Incorrect Old Password", status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()

            return Response("Password updated successfully", status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Verify Email View


@method_decorator(csrf_exempt, name='dispatch')
class VerifyEmailView(APIView):
    """
    An endpoint for verifying the email of a new user.
    """
    permission_classes = (AllowAny, )

    def post(self, request, user_id, token):
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            # Custom error response when the token is invalid
            return Response("User does not exist", status=status.HTTP_400_BAD_REQUEST)

        if user.is_verified:
            return Response("User is already verified", status=status.HTTP_200_OK)

        try:
            token_obj = EmailVerificationToken.objects.get(
                user=user, token=token)
        except EmailVerificationToken.DoesNotExist:
            # Custom error response when the token is invalid
            return Response("Invalid token", status=status.HTTP_400_BAD_REQUEST)

        if token_obj.is_expired():
            return Response("Token Expired", status=status.HTTP_400_BAD_REQUEST)

        user.is_verified = True
        user.save()
        token_obj.delete()

        return Response("User email verified", status=status.HTTP_200_OK)


@method_decorator(csrf_exempt, name='dispatch')
class CreateEmailVerificationToken(APIView):
    """
    An endpoint for creating a new token for email verification.
    """
    permission_classes = (AllowAny, )

    def post(self, request, user_id, token):
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            # Custom error response when the token is invalid
            return Response("User does not exist", status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(user)

        if user.is_verified:
            return Response("User is already verified", status=status.HTTP_200_OK)

        try:
            # Check if a token already exists for the user, or create a new one
            token_obj, created = EmailVerificationToken.objects.get_or_create(
                user=user,
                token=token,
                defaults={'expires_at': timezone.now() +
                          timezone.timedelta(days=1)}
            )

            if not created:
                token_obj.token = uuid.uuid4()
                token_obj.expires_at = timezone.now() + timezone.timedelta(days=1)
                token_obj.save()

            verification_link = "{}/verify-email/{}/{}/".format(
                settings.REACT_APP_URL,
                serializer.data["id"],
                token_obj.token
            )

            context = {
                'first_name': serializer.data["first_name"],
                'email': serializer.data["email"],
                'verification_link': verification_link,
            }
            send_email_verification_mail.delay(context)

            return Response("New verification link sent to your email.", status=status.HTTP_200_OK)
        except Exception as e:
            # Handle exceptions gracefully, log them, or customize the response as needed
            return Response("An error occurred while sending the verification link.", status=status.HTTP_400_BAD_REQUEST)
