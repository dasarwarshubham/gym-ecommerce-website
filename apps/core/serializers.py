from decimal import Decimal
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from django.db import transaction
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import get_user_model
# from django.contrib.auth.signals import user_logged_out
from .models import Product, Category, Review, ProductImages, \
    Customer, CustomerAddress, Order, OrderItem, Cart, CartItem, DeliveryAddress
from .signals import user_email_updated


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
    # account_id = serializers.IntegerField(read_only=True)
    first_name = serializers.SerializerMethodField()
    last_name = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()
    # address = CustomerAddressSerializer(source='customeraddress', many=True)

    def get_first_name(self, obj):
        return obj.account.first_name

    def get_last_name(self, obj):
        return obj.account.last_name

    def get_email(self, obj):
        return obj.account.email

    class Meta:
        model = Customer
        fields = [
            # 'account_id',
            'first_name',
            'last_name',
            'email',
            'gender',
            'phone',
            # 'address'
        ]


class CustomerCreateSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = Customer
        fields = (
            'first_name',
            'last_name',
            'email',
            'gender',
            'phone',
            'password',
        )

    def validate_email(self, email):
        if get_user_model().objects.filter(email=email).exists():
            # raise serializers.ValidationError({"error": 'A user with this email already exists.'})
            raise ValidationError('A user with this email already exists.')
        return email

    def create(self, validated_data):
        password = validated_data.pop('password', None)

        user_data = {
            'first_name': validated_data['first_name'],
            'last_name': validated_data['last_name'],
            'email': validated_data['email']
        }

        with transaction.atomic():
            # Create the user with a hashed password
            # user = get_user_model().objects.create_user(**user_data, password=password)
            user = get_user_model().objects.create(**user_data)

            if password is not None:
                user.set_password(password)
            user.save()

            customer = Customer.objects.create(
                account=user,
                gender=validated_data['gender'],
                phone=validated_data['phone'],
            )
        return customer


class CustomerUpdateSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField()

    class Meta:
        model = Customer
        fields = (
            'first_name',
            'last_name',
            'email',
            'gender',
            'phone',
        )

    def validate_email(self, email):
        if get_user_model().objects.filter(email=email).exclude(pk=self.instance.account_id).exists():
            raise ValidationError('A user with this email already exists.')
        return email

    def update(self, instance, validated_data):
        with transaction.atomic():
            instance.gender = validated_data.get('gender', instance.gender)
            instance.phone = validated_data.get('phone', instance.phone)
            instance.save()

            user = instance.account
            user.first_name = validated_data.get('first_name', user.first_name)
            user.last_name = validated_data.get('last_name', user.last_name)
            new_email = validated_data.get('email', user.email)

            if new_email != user.email:
                if get_user_model().objects.filter(email=new_email).exclude(pk=user.pk).exists():
                    raise ValidationError(
                        'A user with this email already exists.')
                user.is_verified = False
                user.email = new_email

                # #  as email is changed, user is logged out
                # user.auth_token_set.all().delete()
                # user_logged_out.send_robust(self.__class__, user=user)

                # send signal to accounts app that email has been updated by user
                # and send email verification link to new email
                user_email_updated.send_robust(self.__class__, user=user)

            user.email = new_email
            user.save()

        return instance


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
    out_of_stock = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'title', 'slug', 'image', 'price', 'category', 'out_of_stock']

    def get_category(self, product: Product):
        return product.category.title.lower()
    
    def get_out_of_stock(self, product: Product):
        return product.inventory < 1


class ProductDetailsSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()
    out_of_stock = serializers.SerializerMethodField()
    images = ProductImageSerializer(many=True, read_only=True)
    reviews = ReviewSerializer(many=True)

    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'slug',
                  'image', 'price', 'price_with_tax', 'out_of_stock', 'category', 'images', 'reviews']

    price_with_tax = serializers.SerializerMethodField(
        method_name='calculate_tax')

    def calculate_tax(self, product: Product):
        # Round to two decimal places
        return round(product.price * Decimal(1.1), 2)

    def get_category(self, product: Product):
        return product.category.title

    def get_out_of_stock(self, product: Product):
        return product.inventory < 1


class ProductCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['title', 'description', 'slug',
                  'image', 'inventory', 'price', 'category']


class SimpleProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'price', 'slug', 'image']


# Product Category Serailzer


class CategorySerializer(serializers.ModelSerializer):
    products_count = serializers.IntegerField(read_only=True)
    featured_product = ProductSerializer()

    class Meta:
        model = Category
        fields = ['id', 'title', 'image', 'description',
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
        fields = ['id', 'items', 'delivery_address', 'cart_total_price']


class AddCartItemSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField()

    def validate_product_id(self, value):
        if not Product.objects.filter(pk=value).exists():
            raise serializers.ValidationError(
                'No product with the given ID was found.')
        return value

    def validate_quantity(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError(
                'Quantity should be between 1 and 5.')
        return value

    def save(self, **kwargs):
        cart_id = self.context['cart_id']
        product_id = self.validated_data['product_id']
        quantity = self.validated_data['quantity']

        try:
            cart_item = CartItem.objects.get(
                cart_id=cart_id, product_id=product_id)

            if cart_item.product.inventory < cart_item.quantity + quantity:
                raise serializers.ValidationError(
                    'Not enough inventory for this product.')
            cart_item.quantity += quantity
            cart_item.save()
            self.instance = cart_item
        except CartItem.DoesNotExist:
            product = Product.objects.get(pk=product_id)
            # Check if the quantity exceeds the inventory
            if product.inventory < quantity:
                raise serializers.ValidationError(
                    'Not enough inventory for this product.')

            self.instance = CartItem.objects.create(
                cart_id=cart_id, **self.validated_data)

        return self.instance

    class Meta:
        model = CartItem
        fields = ['id', 'product_id', 'quantity']


class UpdateCartItemSerializer(serializers.ModelSerializer):

    def validate_quantity(self, value):

        print("\n\n\n", value, "\n\n\n")
        if value < 1 or value > 5:
            raise serializers.ValidationError(
                'Quantity should be between 1 and 5.')

        # Get the existing cart item
        cart_item = self.instance

        # Check if the new quantity exceeds the inventory
        if cart_item.product.inventory < value:
            raise serializers.ValidationError(
                'Not enough inventory for this product.')

        return value

    class Meta:
        model = CartItem
        fields = ['quantity']


# Order Serializers


class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'unit_price']


class OrderAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryAddress
        fields = (
            'id',
            "full_name",
            "address_line_1",
            "address_line_2",
            "city",
            "state",
            "country",
            "zip",
            "phone"
        )


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    address = OrderAddressSerializer(source="delivery_address")
    total = serializers.SerializerMethodField()

    def get_total(self, obj):
        total = sum(item.unit_price *
                    item.quantity for item in obj.items.all())
        return total

    class Meta:
        model = Order
        fields = ['id', 'customer', 'placed_at',
                  'order_status', 'items', 'total', 'address']

    def to_representation(self, instance: Order):
        representation = super().to_representation(instance)
        if instance.order_status == "P":
            representation['order_status'] = "Pending"
        if instance.order_status == "C":
            representation['order_status'] = "Delivered"
        if instance.order_status == "F":
            representation['order_status'] = "Failed"
        return representation


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

    def validate_delivery_address(self, delivery_address):
        if not CustomerAddress.objects.filter(id=delivery_address).exists():
            raise serializers.ValidationError(
                'No Address with the given ID was found.')
        return delivery_address

    def validate(self, data):
        cart_id = data.get('cart_id')
        cart_items = CartItem.objects.select_related(
            'product').filter(cart_id=cart_id)

        for item in cart_items:
            if item.quantity > item.product.inventory:
                raise serializers.ValidationError(
                    f'Not enough inventory for product {item.product.title}')

        return data

    def save(self, **kwargs):
        with transaction.atomic():
            cart_id = self.validated_data['cart_id']

            customer = Customer.objects.get(account=self.context['user_id'])
            order = Order.objects.create(customer=customer)

            cart_items = CartItem.objects.select_related(
                'product').filter(cart_id=cart_id)
            # order_items = [
            #     OrderItem(
            #         order=order,
            #         product=item.product,
            #         unit_price=item.product.price,
            #         quantity=item.quantity
            #     ) for item in cart_items
            # ]

            order_items = []

            for item in cart_items:
                # Create an order item
                order_item = OrderItem(
                    order=order,
                    product=item.product,
                    unit_price=item.product.price,
                    quantity=item.quantity
                )
                order_items.append(order_item)

                # Reduce the product quantity
                item.product.inventory -= item.quantity
                item.product.save()

            OrderItem.objects.bulk_create(order_items)

            try:
                address_id = Cart.objects.values('delivery_address').get(pk=cart_id)[
                    'delivery_address']
                # Retrieve address data excluding unwanted fields
                address_data = CustomerAddress.objects.defer('id', 'default', 'customer_id').values(
                    'full_name', 'address_line_1', 'address_line_2', 'city', 'state', 'zip', 'country', 'phone'
                ).get(pk=address_id)

                # Create a delivery address if address data is found
                DeliveryAddress.objects.create(order=order, **address_data)
            except ObjectDoesNotExist:
                address_data = None

            # Delete the cart and send the order_created signal
            Cart.objects.filter(pk=cart_id).delete()

            return order
