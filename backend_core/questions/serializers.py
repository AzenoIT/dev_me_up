from rest_framework import serializers

from questions.models import Question
from technologies.serializers import TechnologiesSerializer


class QuestionSerializer(serializers.ModelSerializer):
    technology = TechnologiesSerializer()
    class Meta:
        model = Question
        fields = ('pk',
                  'question',
                  'correct_answer',
                  'wrong_answer_1',
                  'wrong_answer_2',
                  'wrong_answer_3',
                  'difficulty_level',
                  'technology',
                  )
