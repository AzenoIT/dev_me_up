from django.contrib import admin
from . import models


class QuizAdmin(admin.ModelAdmin):
    fields = ('duration_minutes', 'end_status')
    list_display = ('pk', 'start_date', 'duration_minutes', 'end_status')


admin.site.register(models.Quiz, QuizAdmin)
