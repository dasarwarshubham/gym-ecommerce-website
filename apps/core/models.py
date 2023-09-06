from django.db import models
from django.contrib import admin
from django.conf import settings
from uuid import uuid4
from django.core.validators import MinValueValidator, MaxValueValidator
from .validators import validate_file_size


# Customer Model


class Customer(models.Model):
    GENDER_MALE = 'M'
    GENDER_FEMALE = 'F'
    GENDER_NA = 'NA'

    GENDER_CHOICES = (
        (GENDER_MALE,   'Male'),
        (GENDER_FEMALE, 'Female'),
        (GENDER_NA,     'Prefer Not to Say'),
    )

    account = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True)
    phone = models.CharField(max_length=12)
    gender = models.CharField(
        max_length=2, choices=GENDER_CHOICES, default=GENDER_NA, null=True)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Customer'
        verbose_name_plural = 'Customers'
        ordering = ['account__first_name', 'account__last_name']
        permissions = [
            ('view_history', 'Can view history')
        ]

    def __str__(self) -> str:
        return "{} {}".format(self.account.first_name, self.account.last_name)

    @admin.display(ordering='account__first_name')
    def first_name(self):
        return self.account.first_name

    @admin.display(ordering='account__last_name')
    def last_name(self):
        return self.account.last_name


class CustomerAddress(models.Model):
    full_name = models.CharField(max_length=255)
    address_line_1 = models.CharField(max_length=255)
    address_line_2 = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    zip = models.CharField(max_length=20)
    phone = models.CharField(max_length=12)
    default = models.BooleanField(
        verbose_name="Default Address", default=False)
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="customeraddress", null=True)

    def __str__(self) -> str:
        return str(self.full_name) + ", " + str(self.phone)

    class Meta:
        verbose_name = 'Customer address'
        verbose_name_plural = 'Customer addresses'


# Category Model


class Category(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    featured_product = models.ForeignKey(
        # 'Product',  '+' is added to solve circular dependency
        'Product', on_delete=models.SET_NULL, null=True, related_name='+', blank=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ['title']
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

# Promotion Models


class Promotion(models.Model):
    code = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=255)
    discount = models.FloatField()

    def __str__(self) -> str:
        return self.code

    class Meta:
        ordering = ['code']
        verbose_name = 'Promotion Code'
        verbose_name_plural = 'Promotion Codes'


# Products Model


def product_directory_path(instance, filename):
    return 'products/{0}/{1}'.format(instance.title.replace(" ", '-').lower(), filename)


class Product(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField()
    description = models.TextField()
    image = models.ImageField(upload_to=product_directory_path)
    price = models.DecimalField(
        max_digits=8, decimal_places=2, validators=[MinValueValidator(1)])
    inventory = models.IntegerField()
    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, related_name='products')
    promotions = models.ManyToManyField(Promotion, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ['pk']
        verbose_name = 'Product'
        verbose_name_plural = 'Products'


def product_images_directory_path(instance, filename):
    return 'products/{0}/{1}'.format(instance.product.title.replace(" ", '-').lower(), filename)


class ProductImages(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(
        upload_to=product_images_directory_path,
        validators=[validate_file_size])

    class Meta:
        ordering = ['product']
        verbose_name = 'Product Image'
        verbose_name_plural = 'Product Images'

    def __str__(self):
        return self.image.url


# Product Review Model


class Review(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='reviews')
    title = models.CharField(max_length=255)
    description = models.TextField()
    ratings = models.FloatField(
        validators=[MinValueValidator(0.0), MaxValueValidator(5.0)])
    date = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['product']
        verbose_name = 'Product Review'
        verbose_name_plural = 'Product Reviews'


# Orders Model


class Order(models.Model):
    ORDER_STATUS_PENDING = 'P'
    ORDER_STATUS_COMPLETE = 'C'
    ORDER_STATUS_FAILED = 'F'

    ORDER_STATUS_CHOICES = [
        (ORDER_STATUS_PENDING, 'Pending'),
        (ORDER_STATUS_COMPLETE, 'Complete'),
        (ORDER_STATUS_FAILED, 'Failed'),
    ]
    placed_at = models.DateTimeField(auto_now_add=True)
    order_status = models.CharField(
        max_length=1, choices=ORDER_STATUS_CHOICES, default=ORDER_STATUS_PENDING)
    customer = models.ForeignKey(
        Customer, on_delete=models.PROTECT)

    def __str__(self):
        return f"Order #{self.pk} by {self.customer}"

    class Meta:
        ordering = ['-placed_at']
        permissions = [
            ('cancel_order', 'Can cancel order')
        ]


class DeliveryAddress(models.Model):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, related_name='delivery_address')
    full_name = models.CharField(max_length=255)
    address_line_1 = models.CharField(max_length=255)
    address_line_2 = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip = models.CharField(max_length=20)
    country = models.CharField(max_length=255)
    phone = models.CharField(max_length=12)

    def __str__(self) -> str:
        return str(self.full_name) + ", " + str(self.phone)

    class Meta:
        verbose_name = 'Delivery address'
        verbose_name_plural = 'Delivery addresses'

    def __str__(self):
        return f"{self.full_name}, {self.address_line_1}, {self.address_line_2}, {self.city}, {self.state}, {self.zip}, {self.country}"


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.PROTECT, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveSmallIntegerField()
    unit_price = models.DecimalField(
        max_digits=8, decimal_places=2, validators=[MinValueValidator(1)])


# Cart Model

class Cart(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    delivery_address = models.ForeignKey(
        CustomerAddress, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class CartItem(models.Model):
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1)]
    )

    class Meta:
        unique_together = [['cart', 'product']]
