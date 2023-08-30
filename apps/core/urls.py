from django.urls import path
from django.urls.conf import include
from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()

router.register('products', views.ProductViewSet, basename='products')
router.register('categories', views.CategoryViewSet)
router.register('customers', views.CustomerViewSet)

address_router = routers.NestedDefaultRouter(
    router, 'customers', lookup='customer')
address_router.register(
    'addresses', views.CustomerAddressViewSet, basename='address-item')

products_router = routers.NestedDefaultRouter(
    router, 'products', lookup='product')
products_router.register('reviews', views.ReviewViewSet,
                         basename='product-reviews')


# URLConf
urlpatterns = [
    path('', include(router.urls)),
    path('', include(products_router.urls)),
    path('', include(address_router.urls))
]
