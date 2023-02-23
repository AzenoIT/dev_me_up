from django.contrib import admin

from . import models


class QuestionAdmin(admin.ModelAdmin):
    fields = ('question', 'correct_answer', 'wrong_answer_1', 'wrong_answer_2', 'wrong_answer_3', 'difficulty_level',
              'technology')
    list_display = (
        'pk', 'question', 'correct_answer', 'wrong_answer_1', 'wrong_answer_2', 'wrong_answer_3', 'difficulty_level',
        'technology')
    search_fields = ('question',)
    list_filter = ('question', 'technology')
    ordering = ('technology',)


admin.site.register(models.Question, QuestionAdmin)
