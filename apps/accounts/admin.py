from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib import admin
from .models import Account


@admin.register(Account)
class AccountAdmin(BaseUserAdmin):
    list_display = ['email', 'first_name', 'last_name', 'phone']
    list_filter = []
    search_fields = ['id', 'email', 'first_name', 'last_name', 'phone']
    ordering = ('email',)
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ('first_name', 'last_name', 'email', 'phone', "password1", "password2"),
            },
        ),
    )
