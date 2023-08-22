from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet, GenericViewSet
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, UpdateModelMixin
from .serializers import UserSerializer, EquipmentListSerializer, EquipmentDetailSerializer
from .models import User, Equipment


class CreateRetrieveUpdateViewSet(
        RetrieveModelMixin,
        CreateModelMixin,
        UpdateModelMixin,
        GenericViewSet):
    """
    A viewset that provides `retrieve`, `create`, and `update` actions.

    To use it, override the class and set the `.queryset` and
    `.serializer_class` attributes.
    """
    pass


class UserViewSet(
    CreateRetrieveUpdateViewSet
):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get', 'post', 'put', 'patch', 'head', 'options']

    # serializer_classes = {
    #     # 'list': WorkerSerializer,
    #     'retrieve': UserSerializer,
    #     'create': UserSerializer,
    #     'update': UserSerializer,
    #     'partial_update': UserSerializer
    # }
    # default_serializer_class = UserSerializer

    # def get_serializer_class(self):
    #     return self.serializer_classes.get(self.action, self.default_serializer_class)

    def get_queryset(self):
        user = self.request.user.id
        return self.queryset.filter(account=user).prefetch_related('useraddress')

    def get_serializer_context(self):
        user = self.request.user.id
        User = get_user_model()
        account = User.objects.get(id=user)
        context = super().get_serializer_context()
        # print("\n\naccount: {}\n\n".format(account))
        context.update({
            "account": account,
        })
        return context

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, account=self.request.user)
        return obj


class EquipmentViewSet(ReadOnlyModelViewSet):
    """
    A Equipment ViewSet for listing Equipments or retrieving Equipment Details.
    """

    permission_classes = [AllowAny]
    http_method_names = ['get', 'head']

    queryset = Equipment.objects.prefetch_related('images').all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return EquipmentDetailSerializer
        return EquipmentListSerializer
