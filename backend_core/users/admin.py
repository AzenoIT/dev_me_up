from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from . import models

User = get_user_model()


class UserAdminConfig(UserAdmin):
    list_display = ('email', 'username', 'is_active', 'is_staff',)
    list_filter = ('email', 'username', 'is_active', 'is_staff',)
    ordering = ('-last_login',)
    search_fields = ('email', 'username',)


class UserFriendAdmin(admin.ModelAdmin):
    list_display = ('user', 'friend', 'approved',)
    list_filter = ('user', 'friend', 'approved',)
    ordering = ('user', 'friend',)
    search_fields = ('user', 'friend',)


admin.site.register(User, UserAdminConfig)
admin.site.register(models.UserFriend, UserFriendAdmin)
