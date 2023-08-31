from decimal import Decimal
from rest_framework import serializers
from django.db import transaction
from django.contrib.auth import get_user_model
from .models import Product, Category, Review, ProductImages, \
    Customer, CustomerAddress, Order, OrderItem, Cart, CartItem
from .signals import order_created

# Customer Profile Serializers


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = [
            'first_name',
            'last_name',
            'email',
        ]


class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerAddress
        fields = (
            "id",
            "full_name",
            "address_line_1",
            "address_line_2",
            "city",
            "state",
            "country",
            "zip",
            "phone",
            "default"
        )

    def validate(self, data):
        account = self.context['account']

        # combined for create, update and partial_update
        # existing_addresses = CustomerAddress.objects.filter(
        #     customer=account,
        #     full_name=data.get('full_name', self.instance.full_name if self.instance else None),
        #     address_line_1=data.get('address_line_1',self.instance.address_line_1 if self.instance else None),
        #     address_line_2=data.get('address_line_2',self.instance.address_line_2 if self.instance else None),
        #     city=data.get('city',self.instance.city if self.instance else None),
        #     state=data.get('state',self.instance.state if self.instance else None),
        #     country=data.get('country',self.instance.country if self.instance else None),
        #     zip=data.get('zip',self.instance.zip if self.instance else None),
        #     phone=data.get('phone',self.instance.phone if self.instance else None)
        # ).exclude(id=self.instance.id if self.instance else None)

        existing_addresses = CustomerAddress.objects.filter(
            customer=account,
            full_name=data.get('full_name'),
            address_line_1=data.get('address_line_1'),
            address_line_2=data.get('address_line_2'),
            city=data.get('city'),
            state=data.get('state'),
            country=data.get('country'),
            zip=data.get('zip'),
            phone=data.get('phone')
        )

        # validate for partial update, check if same updated address already exists
        if self.instance:
            existing_addresses = CustomerAddress.objects.filter(
                customer=account,
                full_name=data.get('full_name', self.instance.full_name),
                address_line_1=data.get(
                    'address_line_1', self.instance.address_line_1),
                address_line_2=data.get(
                    'address_line_2', self.instance.address_line_2),
                city=data.get('city', self.instance.city),
                state=data.get('state', self.instance.state),
                country=data.get('country', self.instance.country),
                zip=data.get('zip', self.instance.zip),
                phone=data.get('phone', self.instance.phone)
            ).exclude(id=self.instance.id)

            if existing_addresses.exists():
                raise serializers.ValidationError({
                    "error": "Similar Address already exists for this customer."})

            if all(data.get(field) == getattr(self.instance, field) for field in data):
                raise serializers.ValidationError({
                    "error": "No changes to update."})

        if existing_addresses.exists():
            raise serializers.ValidationError({
                "error": "Address already exists for this customer."})

        return data

    def create(self, validated_data):
        customer = Customer.objects.get(account=self.context['account'])

        address = CustomerAddress.objects.create(
            customer=customer, **validated_data)
        return address

    def partial_update(self, instance, validated_data):
        return super().partial_update(instance, validated_data)

    # def partial_update(self, instance, validated_data):
    #     address_exists = CustomerAddress.objects.filter(
    #         customer=instance.customer,
    #         full_name=validated_data.get('full_name', instance.full_name),
    #         address_line_1=validated_data.get(
    #             'address_line_1', instance.address_line_1),
    #         address_line_2=validated_data.get(
    #             'address_line_2', instance.address_line_2),
    #         city=validated_data.get('city', instance.city),
    #         state=validated_data.get('state', instance.state),
    #         country=validated_data.get('country', instance.country),
    #         zip=validated_data.get('zip', instance.zip),
    #         phone=validated_data.get('phone', instance.phone)
    #     ).exclude(id=instance.id)
    #     if all(validated_data.get(field) == getattr(instance, field) for field in validated_data):
    #         raise serializers.ValidationError("No changes to update.")
    #     if address_exists.exists():
    #         raise serializers.ValidationError({
    #             "error": "Updated address already exists for this customer."})
    #     return super().partial_update(instance, validated_data)

    # def update(self, instance, validated_data):
    #     return super().update(instance, validated_data)


class CustomerSerializer(serializers.ModelSerializer):
    account_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Customer
        fields = ['account_id', 'gender', 'phone']


# Product Review Serializer


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'title', 'description', 'ratings', 'date']

    def create(self, validated_data):
        product_id = self.context['product_id']
        return Review.objects.create(product_id=product_id, **validated_data)


# Products Serializers


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImages
        fields = ('id', 'image')
        ordering = ['id']
        extra_kwargs = {
            'product': {
                'write_only': True
            },
        }

    def get_image(self, obj):
        return obj.image.url


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'title', 'slug', 'image', 'price', 'category']

    def get_category(self, product: Product):
        return product.category.title


class ProductDetailsSerializer(serializers.ModelSerializer):
    # category = CategorySerializer()
    category = serializers.SerializerMethodField()
    images = ProductImageSerializer(many=True, read_only=True)
    reviews = ReviewSerializer(many=True)

    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'slug',
                  'image', 'price', 'price_with_tax', 'category', 'images', 'reviews']

    price_with_tax = serializers.SerializerMethodField(
        method_name='calculate_tax')

    def calculate_tax(self, product: Product):
        return product.price * Decimal(1.1)

    def get_category(self, product: Product):
        return product.category.title


class ProductCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['title', 'description', 'slug',
                  'image', 'inventory', 'price', 'category']


class SimpleProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'price', 'slug']


# Product Category Serailzer


class CategorySerializer(serializers.ModelSerializer):
    products_count = serializers.IntegerField(read_only=True)
    featured_product = SimpleProductSerializer()

    class Meta:
        model = Category
        fields = ['id', 'title', 'description',
                  'products_count', 'featured_product']


# Cart Serializers


class CartItemSerializer(serializers.ModelSerializer):
    product = SimpleProductSerializer()
    total_price = serializers.SerializerMethodField()

    def get_total_price(self, cart_item: CartItem):
        return cart_item.quantity * cart_item.product.price

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity', 'total_price']


class CartSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    items = CartItemSerializer(many=True, read_only=True)
    cart_total_price = serializers.SerializerMethodField()

    def get_cart_total_price(self, cart):
        return sum([item.quantity * item.product.price for item in cart.items.all()])

    class Meta:
        model = Cart
        fields = ['id', 'items', 'cart_total_price']


class AddCartItemSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField()

    def validate_product_id(self, value):
        if not Product.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No product with the given ID was found.')
        return value

    def save(self, **kwargs):
        cart_id = self.context['cart_id']
        product_id = self.validated_data['product_id']
        quantity = self.validated_data['quantity']

        try:
            cart_item = CartItem.objects.get(
                cart_id=cart_id, product_id=product_id)
            cart_item.quantity += quantity
            cart_item.save()
            self.instance = cart_item
        except CartItem.DoesNotExist:
            self.instance = CartItem.objects.create(
                cart_id=cart_id, **self.validated_data)

        return self.instance

    class Meta:
        model = CartItem
        fields = ['id', 'product_id', 'quantity']


class UpdateCartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['quantity']


# Order Serializers

class OrderProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'title', 'slug', 'image', 'price']


class OrderItemSerializer(serializers.ModelSerializer):
    product = OrderProductSerializer()

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'unit_price']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'customer', 'placed_at', 'payment_status', 'items']


class UpdateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['payment_status']


class CreateOrderSerializer(serializers.Serializer):
    cart_id = serializers.UUIDField()

    def validate_cart_id(self, cart_id):
        if not Cart.objects.filter(id=cart_id).exists():
            raise serializers.ValidationError(
                'No cart with the given ID was found.')
        if CartItem.objects.filter(cart_id=cart_id).count() == 0:
            raise serializers.ValidationError('The cart is empty.')
        return cart_id

    def save(self, **kwargs):
        with transaction.atomic():
            cart_id = self.validated_data['cart_id']

            customer = Customer.objects.get(
                account=self.context['user_id'])
            order = Order.objects.create(customer=customer)

            cart_items = CartItem.objects \
                .select_related('product') \
                .filter(cart_id=cart_id)
            order_items = [
                OrderItem(
                    order=order,
                    product=item.product,
                    unit_price=item.product.price,
                    quantity=item.quantity
                ) for item in cart_items
            ]
            OrderItem.objects.bulk_create(order_items)

            Cart.objects.filter(pk=cart_id).delete()

            # send signal when order is created
            # this signal can be listened by other apps
            # for eg. when order created admin will be notified of new order
            order_created.send_robust(self.__class__, order=order)

            return order
