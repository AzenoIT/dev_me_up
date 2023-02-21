from django.contrib import admin
from . import models

class GameSetAdmin(admin.ModelAdmin):
    fields = ('difficulty_level', 'question', 'correct_answer', 'add_answer1', 'add_answer2', 'add_answer3')
    list_display = ('pk', 'difficulty_level', 'question', 'correct_answer', 'add_answer1', 'add_answer2', 'add_answer3')
    search_fields = ('difficulty_level',)
    list_filter = ('difficulty_level', 'question')
    ordering = ('difficulty_level',)

admin.site.register(models.SourceSet)
admin.site.register(models.GameSet, GameSetAdmin)
