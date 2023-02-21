from django.contrib import admin

from . import models


class QuestionAdmin(admin.ModelAdmin):
    fields = ('question', 'answer', 'technologies')
    list_display = ('pk', 'question', 'answer', 'technologies')
    search_fields = ('question',)
    list_filter = ('question', 'technologies')
    ordering = ('-creation_date',)


admin.site.register(models.Question)
