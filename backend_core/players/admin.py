from django.contrib import admin

from .models import Player


class PlayerAdmin(admin.ModelAdmin):
    fields = ('pk', 'nick', 'rank', 'is_bot')
    list_display = ('pk', 'nick', 'rank', 'is_bot')
    search_fields = ('is_bot',)
    list_filter = ('is_bot', 'nick')
    ordering = ('-rank',)

admin.site.register(Player, PlayerAdmin)
