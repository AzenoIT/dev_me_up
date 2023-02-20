from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

User = get_user_model()


class UserAdminConfig(UserAdmin):
    list_display = ('email', 'username', 'is_active', 'is_staff',)
    list_filter = ('email', 'username', 'is_active', 'is_staff',)
    ordering = ('-last_login',)
    search_fields = ('email', 'username',)


admin.site.register(User, UserAdminConfig)
