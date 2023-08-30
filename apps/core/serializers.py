from decimal import Decimal
from rest_framework import serializers
from django.db import transaction
from django.contrib.auth import get_user_model
from .models import Product, Category, Review, ProductImages, Customer, CustomerAddress


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


# Product Category Serailzer


class CategorySerializer(serializers.ModelSerializer):
    products_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'title', 'description', 'products_count']


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

