from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, EquipmentViewSet

router = DefaultRouter()
router.register('equipments', EquipmentViewSet, basename='equipment')
# router.register('user', EquipmentViewSet, basename='user')

urlpatterns = [
    path('api/', include(router.urls)),
    path('profile/',
         UserViewSet.as_view({
             "get": "retrieve",
             "post": "create",
             #  "put": "update",
             #  "patch": "partial_update",
             # "delete": "destroy"
         }), name='user-profile'),
]
