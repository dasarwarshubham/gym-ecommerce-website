from django.apps import apps
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib import admin
from .models import User, EmailVerificationToken

# from knox.models import AuthToken
# from django.contrib.auth.models import Group
# from .models import User, AuthToken as ModifiedAuthToken, Group as ModifiedGroup


@admin.register(EmailVerificationToken)
class AccountAdmin(admin.ModelAdmin):
    list_display = ['token', 'user', 'expires_at']
    list_select_related = ['user']


@admin.register(User)
class AccountAdmin(BaseUserAdmin):
    list_display = ['email', 'full_name', 'is_verified']
    search_fields = ['id', 'email', 'first_name', 'last_name']
    ordering = ('email',)
    # list_per_page = 25
    search_fields = ['first_name__istartswith', 'last_name__istartswith']
    list_filter = ['is_verified']

    fieldsets = (
        (None, {"fields": ('first_name', 'last_name', 'email', 'password')}),
        (
            ("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('first_name', 'last_name', 'email', 'password1', 'password2'),
        }),
    )

    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
    full_name.short_description = "Name"


# @admin.register(ModifiedAuthToken)
# class AuthTokenAdmin(admin.ModelAdmin):

#     list_display = ('digest', 'user', 'created', 'expiry',)
#     fields = ()
#     raw_id_fields = ('user',)


# # registering third party apps in same admin section
# # knox
# admin.site.unregister(AuthToken)
# # admin.site.register(ModifiedAuthToken)
# # groups
# admin.site.unregister(Group)
# admin.site.register(ModifiedGroup)


# change knox app name in admin
apps.get_app_config('knox').verbose_name = "Active Users"
