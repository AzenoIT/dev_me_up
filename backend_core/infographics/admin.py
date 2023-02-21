from django.contrib import admin

from .models import Infographic

class InfoAdmin(admin.ModelAdmin):
    fields = ('name', 'information')
    list_display = ('name',)
    search_fields = ('name', 'information')
    list_filter = ('name', 'information')
    ordering = ('name',)

admin.site.register(Infographic, InfoAdmin)
