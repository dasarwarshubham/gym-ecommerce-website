
from django.contrib import admin
from django.conf import settings
from .models import User, UserAddress, Equipment, EquipmentImages
from django.utils.html import format_html


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = [
        'account',
        # 'gender',
        # 'profile_image',
    ]
    # list_filter = ['gender']
    search_fields = ['account']

    # to override list_select_related
    def select_related(self):
        return settings.AUTH_USER_MODEL

    def account(self, account):
        print(account.email)
        return "{} {}".format(account.email, account.last_name)


@admin.register(UserAddress)
class UserAddressAdmin(admin.ModelAdmin):
    list_display = ['user', 'full_name', 'address_line_1', 'address_line_2',
                    'city', 'state', 'country', 'zip', 'phone', 'default']
    list_filter = ['country', 'state', 'city', 'zip']
    search_fields = ['user', 'full_name', 'country', 'state', 'city', 'zip']
    list_display_link = ['full_name']


@admin.register(Equipment)
class EquipmentsAdmin(admin.ModelAdmin):
    search_fields = ['name', 'description']
    list_display = ['id', 'name', 'type', 'price',
                    'ratings', 'reviews', 'created_at']
    list_display_links = ['name']


@admin.register(EquipmentImages)
class EquipmentImagesAdmin(admin.ModelAdmin):

    search_fields = ['product__name']
    list_display = ['id', 'product', 'image_tag',]
    list_display_links = ['product']

    def image_tag(self, obj):
        return format_html('<img src="{}" style="height:70px;width:auto;" />'.format(obj.image.url))

    image_tag.short_description = 'Image'
