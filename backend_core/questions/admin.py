from django.contrib import admin

from . import models


class QuestionAdmin(admin.ModelAdmin):
    fields = ('question', 'answer', 'technology')
    list_display = ('pk', 'question', 'answer', 'technology')
    search_fields = ('question',)
    list_filter = ('question', 'technology')
    ordering = ('-creation_date',)


admin.site.register(models.Question)
