from django.contrib import admin

from .models import Infographic

class InfoAdmin(admin.ModelAdmin):
    fields = ('name', 'value')
    list_display = ('name',)
    search_fields = ('name', 'value')
    list_filter = ('name', 'value')
    ordering = ('name',)

admin.site.register(Infographic, InfoAdmin)
