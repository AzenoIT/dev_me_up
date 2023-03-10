from django.contrib import admin

from .models import Player


class PlayerAdmin(admin.ModelAdmin):
    fields = ('nick', 'rank', 'is_bot')
    list_display = ('uuid', 'pk', 'nick', 'rank', 'is_bot', 'is_online', 'is_active')
    search_fields = ('is_bot',)
    list_filter = ('is_bot', 'nick', 'is_online', 'is_active')
    ordering = ('-rank',)

admin.site.register(Player, PlayerAdmin)
