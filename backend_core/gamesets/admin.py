from django.contrib import admin
from . import models


class GameSetAdmin(admin.ModelAdmin):
    fields = ('difficulty_level', 'question', 'correct_answer', 'add_answer1', 'add_answer2', 'add_answer3')
    list_display = ('pk', 'difficulty_level', 'question', 'correct_answer', 'add_answer1', 'add_answer2', 'add_answer3')
    search_fields = ('difficulty_level',)
    list_filter = ('difficulty_level', 'question')
    ordering = ('difficulty_level',)


class GameAdmin(admin.ModelAdmin):
    fields = ('result', 'date_start', 'end')
    list_display = ('pk', 'result', 'date_start', 'date_end')
    search_fields = ('result', 'date_start', 'date_end')
    list_filter = ('result', 'date_start', 'date_end')
    ordering = ('result', 'date_start', 'date_end')


admin.site.register(models.SourceSet)
admin.site.register(models.GameSet, GameSetAdmin)
admin.site.register(models.Game, GameAdmin)
