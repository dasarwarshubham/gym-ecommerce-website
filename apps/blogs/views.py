from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.pagination import PageNumberPagination

from .models import Blog
from .serializers import BlogListSerializer, BlogDetailsSerializer

from rest_framework import permissions


# Custom Permission Class
class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_staff)


# Pagination Class
class DefaultPagination(PageNumberPagination):
    page_size = 20


class BlogViewSet(ModelViewSet):
    http_method_names = ['get', 'head', 'post', 'put', 'delete']
    permission_classes = [IsAdminOrReadOnly]
    queryset = Blog.objects.all()

    lookup_field = 'slug__iexact'
    pagination_class = DefaultPagination
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]

    search_fields = ['title', 'description', 'content']
    ordering_fields = ['created_at']

    serializer_classes = {
        'list': BlogListSerializer,
        'retrieve': BlogDetailsSerializer,
        'create': BlogDetailsSerializer,
        'update': BlogDetailsSerializer
    }
    default_serializer_class = BlogListSerializer

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.default_serializer_class)

    @method_decorator(cache_page(60 * 60 * 12))  # 12 hours cache
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @method_decorator(cache_page(60 * 60 * 12))  # 12 hours cache
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
