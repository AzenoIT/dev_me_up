from django.contrib import admin
from . import models


# TODO - this filtering does not make many sense, does it?
class DeviceInformationAdmin(admin.ModelAdmin):
    fields = ('device_dictionary',)
    list_display = ('pk', 'device_dictionary')
    search_fields = ('device_dictionary',)
    list_filter = ('device_dictionary',)
    ordering = ('-device_dictionary',)


class ApplicationAdmin(admin.ModelAdmin):
    fields = ('device_identity', 'creation_date')
    list_display = ('pk', 'device_identity', 'creation_date')
    search_fields = ('device_identity',)
    list_filter = ('device_identity', 'creation_date')
    ordering = ('-creation_date',)


admin.site.register(models.DeviceInformation)
admin.site.register(models.Application, ApplicationAdmin)
