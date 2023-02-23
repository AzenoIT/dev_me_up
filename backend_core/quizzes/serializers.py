from rest_framework import serializers

from quizzes.models import Quiz


class GameSerializer(serializers.Serializer):
    uuid = serializers.CharField(max_length=50)
    oponent = serializers.CharField(max_length=100, required=False, default=None)
    technology_id = serializers.CharField(max_length=100)

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass


class AnswerSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    question = serializers.CharField(max_length=455)
    answer_1 = serializers.CharField(max_length=455)
    answer_2 = serializers.CharField(max_length=455)
    answer_3 = serializers.CharField(max_length=455)
    answer_4 = serializers.CharField(max_length=455)

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = (
            'start_date',
            'duration_minutes',
            'end_status',
        )