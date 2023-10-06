from django.urls import path
from django.urls.conf import include
from rest_framework_nested import routers
from .views import BlogViewSet

router = routers.DefaultRouter()
router.register('blogs', BlogViewSet, basename='blogs')


# URLConf
urlpatterns = [
    path('', include(router.urls)),
]
