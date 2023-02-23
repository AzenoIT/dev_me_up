from django.contrib import admin
from . import models


class GameSetAdmin(admin.ModelAdmin):
    fields = (
    'difficulty_level', 'question', 'correct_answer', 'add_answer1', 'add_answer2', 'add_answer3', 'technologies',
    'source_set')
    list_display = ('pk', 'difficulty_level', 'question', 'correct_answer', 'add_answer1', 'add_answer2', 'add_answer3')
    search_fields = ('difficulty_level',)
    list_filter = ('difficulty_level', 'question')
    ordering = ('difficulty_level',)


class GameAdmin(admin.ModelAdmin):
    fields = (
    'player_id_1', 'player_id_2', 'result', 'answer_player_1', 'answer_player_2', 'response_bot_time', 'reponse_send',
    'game_sets', 'quiz')
    list_display = (
    'pk', 'player_id_1', 'player_id_2', 'result', 'answer_player_1', 'answer_player_2', 'response_bot_time',
    'reponse_send', 'game_sets', 'quiz')


admin.site.register(models.SourceSet)
admin.site.register(models.GameSet, GameSetAdmin)
admin.site.register(models.Game, GameAdmin)
