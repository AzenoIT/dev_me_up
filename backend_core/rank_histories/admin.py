from django.contrib import admin

from .models import PlayerRankHistory


class PlayerRankHistoryAdmin(admin.ModelAdmin):
    fields = ('new_value', 'rank_change_date', 'player')
    list_display = ('pk', 'new_value', 'rank_change_date', 'player')
    search_fields = ('rank_change_date', 'new_value',)
    list_filter = ('rank_change_date', 'new_value')
    ordering = ('-rank_change_date',)

admin.site.register(PlayerRankHistory,PlayerRankHistoryAdmin)
