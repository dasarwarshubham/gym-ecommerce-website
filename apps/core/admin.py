
from django.contrib import admin
from .models import Equipment


@admin.register(Equipment)
class EquipmentsAdmin(admin.ModelAdmin):
    search_fields = ['name', 'description']
    list_display = ['id', 'name', 'type', 'price',
                    'ratings', 'reviews', 'created_at']
    # list_editable = ['name', 'type']
    list_display_links = ['name']
