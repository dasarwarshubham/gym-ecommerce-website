
from django.contrib import admin
from .models import Equipment, EquipmentImages
from django.utils.html import format_html


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


# admin.site.index_title = "Tables"
admin.site.site_header = 'FitFlex Admin Panel'
admin.site.enable_nav_sidebar = True  # default=True
