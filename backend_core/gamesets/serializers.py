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
