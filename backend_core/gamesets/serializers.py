from rest_framework import serializers

from quizzes.models import Quiz
from quizzes.serializers import QuizSerializer
from technologies.serializers import TechnologiesSerializer
from . import models
from players.serializers import PlayerSerializer
from .models import GameSet


class SourceSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SourceSet
        fields = ('id', 'name')

class GameSetSerializer(serializers.ModelSerializer):
    technologies = TechnologiesSerializer()
    source_set = SourceSetSerializer()
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
    player_id_1_id = PlayerSerializer()
    player_id_2_id = PlayerSerializer()
    game_sets_id = GameSetSerializer()
    quiz_id = QuizSerializer()

    class Meta:
        model = models.Game
        fields = ('id',
                  'player_id_1_id',
                  'player_id_2_id',
                  'result',
                  'game_sets_id',
                  'quiz_id',
                  )
