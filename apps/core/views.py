from django.db.models.aggregates import Count
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from .pagination import DefaultPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from .filters import ProductFilter
from .permissions import IsAdminOrReadOnly, FullDjangoModelPermissions, ViewCustomerHistoryPermission

from .models import Category, Product, Review, Customer, CustomerAddress
from .serializers import CategorySerializer, ProductSerializer, ProductCreateSerializer, \
    ProductDetailsSerializer, ProductCreateSerializer, ReviewSerializer, \
    CustomerSerializer, CustomerAddressSerializer


class CustomerViewSet(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [FullDjangoModelPermissions]

    @action(detail=True, permission_classes=[ViewCustomerHistoryPermission])
    def history(self, request, pk):
        return Response('ok')

    @action(detail=False, methods=['GET', 'PUT'], permission_classes=[IsAuthenticated])
    def me(self, request):
        user = request.user.id
        customer = Customer.objects.get(account=user)
        if request.method == 'GET':
            serializer = CustomerSerializer(customer)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = CustomerSerializer(customer, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)


class CustomerAddressViewSet(ModelViewSet):
    http_method_names = ['get', 'post', 'patch', 'delete']
    serializer_class = CustomerAddressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user.id
        return CustomerAddress.objects.filter(customer=user)

    def get_serializer_context(self):
        return {'account': self.request.user.id}


class ProductViewSet(ModelViewSet):
    http_method_names = ['get', 'head', 'post', 'put']
    permission_classes = [IsAdminOrReadOnly]

    queryset = Product.objects.prefetch_related('category').all()
    serializer_class = ProductDetailsSerializer

    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_class = ProductFilter
    pagination_class = DefaultPagination

    search_fields = ['title', 'description']
    ordering_fields = ['price', 'last_update']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ProductDetailsSerializer
        elif self.action == 'create':
            return ProductCreateSerializer
        return ProductSerializer

    def get_queryset(self):
        queryset = self.queryset
        if self.action == 'retrieve':
            queryset = queryset.prefetch_related(
                'images').prefetch_related('reviews')
        return queryset

    def get_serializer_context(self):
        return {'request': self.request}


class CategoryViewSet(ModelViewSet):
    http_method_names = ['get', 'head', 'post', 'put']
    permission_classes = [IsAdminOrReadOnly]

    queryset = Category.objects.annotate(
        products_count=Count('products')).all()
    serializer_class = CategorySerializer

    def destroy(self, request, *args, **kwargs):
        if Category.objects.filter(product_id=kwargs['pk']).count() > 0:
            return Response({'error': 'Category cannot be deleted because it includes one or more products.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
        return super().destroy(request, *args, **kwargs)


class ReviewViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    http_method_names = ['get', 'head']
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Review.objects.filter(product_id=self.kwargs['product_pk'])

    def get_serializer_context(self):
        return {'product_id': self.kwargs['product_pk']}
