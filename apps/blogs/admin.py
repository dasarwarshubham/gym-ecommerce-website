from django.contrib import admin
from django.utils.html import format_html
from .models import Blog

# Register your models here.


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        'slug': ['title']
    }
    list_display = [
        'title',
        'thumbnail',
        'description',
        'created_at',
    ]
    list_per_page = 40
    search_fields = ['title']

    def thumbnail(self, obj):
        if obj.image:
            return format_html('<img src="{}"  style="width:auto; height:100%; max-height: 120px; object-fit:contain" />'.format(obj.image.url))
        return "No Image"

    thumbnail.short_description = 'Image'  # Column header text
