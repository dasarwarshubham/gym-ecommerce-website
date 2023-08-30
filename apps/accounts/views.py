from django.contrib.auth import login
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from knox.views import LoginView as KnoxLoginView
from knox.auth import TokenAuthentication
from .serializers import UserCreateSerializer, UserLoginSerializer, UserSerializer
from .models import User


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
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = UserCreateSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# User Login View


class LoginView(KnoxLoginView):
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
