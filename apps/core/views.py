import logging
from requests import ConnectionError
from django.db.models.aggregates import Count
from django.db.models import F
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, DestroyModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework import status
from .utils.pagination import DefaultPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from .utils.lookups import CaseInsensitiveLookup
from .utils.filters import ProductFilter
from .utils.permissions import IsAdminOrReadOnly, FullDjangoModelPermissions, ViewCustomerHistoryPermission
from .signals import order_created

from .models import Category, Product, Review, Customer, CustomerAddress, \
    Cart, CartItem, Order, OrderItem
from .serializers import CategorySerializer, ProductSerializer, ProductCreateSerializer, \
    ProductDetailsSerializer, ProductCreateSerializer, ReviewSerializer, \
    CustomerSerializer, CustomerAddressSerializer, CustomerCreateSerializer, CustomerUpdateSerializer, \
    CartSerializer, CartItemSerializer, AddCartItemSerializer, UpdateCartItemSerializer, \
    OrderSerializer, CreateOrderSerializer, UpdateOrderSerializer


class CustomerViewSet(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [FullDjangoModelPermissions]

    # @action(detail=True, permission_classes=[ViewCustomerHistoryPermission])
    # def history(self, request, pk):
    #     return Response('ok')

    @action(detail=False, methods=['GET', 'PATCH'], permission_classes=[IsAuthenticated])
    def me(self, request):
        user = request.user.id
        customer = Customer.objects.get(account=user)
        if request.method == 'GET':
            serializer = CustomerSerializer(customer)
            return Response(serializer.data)
        elif request.method == 'PATCH':
            serializer = CustomerUpdateSerializer(
                customer, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            updated_customer = serializer.save()
            serializer = CustomerSerializer(updated_customer)
            return Response(serializer.data)

    @action(detail=False, methods=['POST'], permission_classes=[AllowAny])
    def signup(self, request):
        if request.method == 'POST':
            serializer = CustomerCreateSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            customer = serializer.save()
            serializer = CustomerSerializer(customer)
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
    http_method_names = ['get', 'head', 'post', 'put', 'delete']
    permission_classes = [IsAdminOrReadOnly]

    queryset = Product.objects.only('id', 'title', 'slug',  'description',
                                    'image', 'price', 'category__id', 'category__title').select_related('category')
    lookup_field = 'slug__iexact'
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_class = ProductFilter
    pagination_class = DefaultPagination

    search_fields = ['title', 'description']
    ordering_fields = ['price', 'last_update']

    serializer_classes = {
        'list': ProductSerializer,
        'retrieve': ProductDetailsSerializer,
        'create': ProductCreateSerializer
    }
    default_serializer_class = ProductSerializer

    @action(detail=False, methods=['GET'])
    def featured(self, request):
        if request.method == 'GET':
            featured_products = Product.objects.filter(
                category__featured_product_id=F('id'))
            serializer = ProductSerializer(
                featured_products, many=True, context={'request': request})
            return Response(serializer.data)

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.default_serializer_class)

    @method_decorator(cache_page(60 * 15))
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @method_decorator(cache_page(60 * 15))
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    # optimizations ->  removed to increase speed
    # def get_queryset(self):
    #     queryset = self.queryset
    #     if self.action == 'retrieve':
    #         queryset = queryset.prefetch_related('images', 'reviews')

    #     return queryset

    def get_serializer_context(self):
        return {'request': self.request}

    def destroy(self, request, *args, **kwargs):
        if OrderItem.objects.filter(product_id=kwargs['pk']).count() > 0:
            return Response({'error': 'Product cannot be deleted because it is associated with an order item.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
        return super().destroy(request, *args, **kwargs)


class CategoryViewSet(ModelViewSet):
    http_method_names = ['get', 'head', 'delete', 'post', 'put']
    permission_classes = [IsAdminOrReadOnly]

    queryset = Category.objects.annotate(
        products_count=Count('products')).select_related('featured_product').all()
    lookup_field = 'title__iexact'
    serializer_class = CategorySerializer

    @method_decorator(cache_page(60 * 15))
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @method_decorator(cache_page(60 * 15))
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

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

    @method_decorator(cache_page(60 * 15))
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @method_decorator(cache_page(60 * 15))
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)


class CartViewSet(CreateModelMixin,
                  RetrieveModelMixin,
                  DestroyModelMixin,
                  GenericViewSet):
    queryset = Cart.objects.prefetch_related('items__product')
    serializer_class = CartSerializer

    @action(detail=True, methods=['PUT'], permission_classes=[IsAuthenticated], url_path="address")
    def set_cart_address(self, request, pk):
        if request.method == 'PUT':
            try:
                cart = Cart.objects.get(pk=pk)
                address = CustomerAddress.objects.get(
                    pk=request.data.get('delivery_address'))
                cart.delivery_address = address
                cart.save()

                return Response("Cart Address Set", status=status.HTTP_200_OK)
            except Cart.DoesNotExist:
                return Response("Cart with given ID does not exist", status=status.HTTP_404_NOT_FOUND)
            except CustomerAddress.DoesNotExist:
                return Response("Customer Address not found, Please add new address in profile section.", status=status.HTTP_404_NOT_FOUND)

        return Response("Invalid request method", status=status.HTTP_405_METHOD_NOT_ALLOWED)


class CartItemViewSet(ModelViewSet):
    http_method_names = ['get', 'post', 'patch', 'delete', 'head', 'options']

    serializer_classes = {
        'create': AddCartItemSerializer,
        'partial_update': UpdateCartItemSerializer
    }
    default_serializer_class = CartItemSerializer

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.default_serializer_class)

    def get_serializer_context(self):
        return {'cart_id': self.kwargs['cart_pk']}

    def get_queryset(self):
        return CartItem.objects \
            .filter(cart_id=self.kwargs['cart_pk']) \
            .select_related('product') \
            .only('id', 'quantity', 'product__id', 'product__title', 'product__price')

    @action(detail=False, methods=['DELETE'], url_path="delete-all")
    def delete_all_items(self, request, cart_pk):
        if request.method == 'DELETE':
            # CartItem.objects.filter(cart_id=self.kwargs['cart_pk']).delete()
            CartItem.objects.filter(cart_id=cart_pk).delete()
            return Response('All items in the cart have been deleted')


logger = logging.getLogger(__name__)


class OrderViewSet(ModelViewSet):
    http_method_names = ['get', 'post', 'patch', 'delete', 'head', 'options']

    def get_permissions(self):
        if self.request.method in ['PATCH', 'DELETE']:
            return [IsAdminUser()]
        return [IsAuthenticated()]

    def create(self, request, *args, **kwargs):
        try:
            logger.info("Order Received from {}".format(self.request.user))
            serializer = CreateOrderSerializer(
                data=request.data,
                context={'user_id': self.request.user.id})
            serializer.is_valid(raise_exception=True)
            order = serializer.save()
            serializer = OrderSerializer(order)
            logger.info("Order#{} placed by {} successful.".format(
                serializer.data["id"], self.request.user))

            user = self.request.user
            # this signal can be listened by other apps
            # for eg. when order created admin and user will be notified of new order
            order_created.send_robust(
                sender=self.__class__,
                order=serializer.data,
                user=user.email
            )
            return Response(serializer.data)
        except ConnectionError:
            logger.critical(
                "Order from {} failed".format(self.request.user))

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateOrderSerializer
        elif self.request.method == 'PATCH':
            return UpdateOrderSerializer
        return OrderSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Order.objects.prefetch_related('items__product')

        customer_id = Customer.objects.only(
            'account').get(account_id=user.id)

        return Order.objects.filter(customer_id=customer_id)
