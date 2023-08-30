# from django.conf import settings
from django.contrib import admin, messages
from django.db.models.aggregates import Count
from django.db.models.query import QuerySet
from django.utils.html import format_html, urlencode
from django.urls import reverse

from .models import Customer, CustomerAddress, Category, Promotion, Product, ProductImages, Review


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['account', 'first_name',
                    'last_name', 'gender', 'phone', 'orders', 'last_update']
    list_select_related = ['account']
    list_per_page = 40
    search_fields = ['account__first_name__istartswith',
                     'account__last_name__istartswith']



@admin.register(CustomerAddress)
class CustomerAddressAdmin(admin.ModelAdmin):
    list_display = ['customer', 'full_name', 'address_line_1', 'address_line_2',
                    'city', 'state', 'country', 'zip', 'phone', 'default']
    list_filter = ['country', 'state', 'city', 'zip']
    search_fields = ['customer', 'full_name',
                     'country', 'state', 'city', 'zip']
    list_display_link = ['full_name']


class InventoryFilter(admin.SimpleListFilter):
    title = 'inventory'
    parameter_name = 'inventory'

    def lookups(self, request, model_admin):
        return [
            ('<10', 'Low')
        ]

    def queryset(self, request, queryset: QuerySet):
        if self.value() == '<10':
            return queryset.filter(inventory__lt=10)


class ProductImageInline(admin.TabularInline):
    model = ProductImages
    extra = 0
    readonly_fields = ['thumbnail']

    def thumbnail(self, instance):
        print(instance)
        if instance.image != '':
            return format_html(f'<img src="{instance.image.url}" class="w-auto" style="height: 100px;" />')
        return ''


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    autocomplete_fields = ['category']
    prepopulated_fields = {
        'slug': ['title']
    }
    actions = ['clear_inventory']
    inlines = [ProductImageInline]
    list_display = ['title', 'price',
                    'inventory_status', 'category_title']
    # list_editable = ['price']
    list_filter = ['category', 'last_update', InventoryFilter]
    list_per_page = 10
    list_select_related = ['category']
    search_fields = ['title']

    def category_title(self, product):
        return product.category.title

    @admin.display(ordering='inventory')
    def inventory_status(self, product):
        if product.inventory < 10:
            return 'Low'
        return 'OK'

    @admin.action(description='Clear inventory')
    def clear_inventory(self, request, queryset):
        updated_count = queryset.update(inventory=0)
        self.message_user(
            request,
            f'{updated_count} products were successfully updated.',
            messages.ERROR
        )


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    autocomplete_fields = ['featured_product']
    list_display = ['title', 'products_count']
    search_fields = ['title']

    @admin.display(ordering='products_count')
    def products_count(self, category):
        url = (
            reverse('admin:{}_{}_changelist'.format(
                category._meta.app_label,
                'product'
            ))
            + '?'
            + urlencode({
                'category__id': str(category.id)
            }))

        return format_html('<a href="{}">{} Products</a>', url, category.products_count)

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(
            products_count=Count('product')
        )


@admin.register(Promotion)
class PromotionAdmin(admin.ModelAdmin):
    search_fields = ['code', 'discount' 'description']
    list_display = ['code', 'discount', 'description']
    list_display_links = ['code']


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    # autocomplete_fields = ['customer']
    list_display = ['product', 'title',
                    'description', 'ratings', 'date']
