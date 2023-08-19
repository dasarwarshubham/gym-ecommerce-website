from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EquipmentViewSet

router = DefaultRouter()
router.register('equipments', EquipmentViewSet, basename='equipment')

urlpatterns = [
    path('api/', include(router.urls)),
    # ... other urlpatterns if any
]
