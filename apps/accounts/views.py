from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from knox.views import LoginView as KnoxLoginView
from knox.auth import TokenAuthentication
from django.contrib.auth import login
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404


from .serializers import UserSerializer, UserLoginSerializer, UserUpdateSerializer
from .models import Account


class AccountView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        id = request.user.id
        account = get_object_or_404(Account, pk=id)
        serializer = UserSerializer(account)
        return Response(serializer.data)


class AccountUpdateView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def put(self, request):
        user = request.user
        serializer = UserUpdateSerializer(
            instance=user, data=request.data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)


class AccountRegisterView(APIView):
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(KnoxLoginView):
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        print(serializer.validated_data)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginView, self).post(request, format=None)

        # if user:
        #     token, _ = Token.objects.get_or_create(user=user)
        #     return Response({'token': token.key, 'user': UserSerializer(user).data}, status=status.HTTP_200_OK)

        # return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
