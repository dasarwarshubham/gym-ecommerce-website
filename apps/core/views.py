
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from .serializers import EquipmentListSerializer, EquipmentDetailSerializer
from .models import Equipment


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
