from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib import admin
from .models import Account


@admin.register(Account)
class AccountAdmin(BaseUserAdmin):
    list_display = ['email', 'full_name', 'phone', 'gender']
    list_filter = ['gender']
    search_fields = ['id', 'email', 'first_name', 'last_name', 'phone']
    ordering = ('email',)

    fieldsets = (
        # (None, {"fields": ('email', 'first_name', 'last_name', 'phone', 'gender')}),
        (None, {"fields": ('first_name', 'last_name', 'email',
         'phone', 'gender', 'password')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('first_name', 'last_name', 'email', 'phone', 'gender', 'password1', 'password2'),
        }),
    )

    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
    full_name.short_description = "Name"
