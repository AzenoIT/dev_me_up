from rest_framework import serializers

from . import models


class GameSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GameSet
        fields = ('id',
                  'source_set',
                  'technologies',
                  'difficulty_level',
                  'question',
                  'correct_answer',
                  'add_answer1',
                  'add_answer2',
                  'add_answer3')

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Game
        fields = ('id',
                  'player_id_1',
                  'player_id_2',
                  'result,'
                  'date_start',
                  'date_end',
                  'game_sets')

