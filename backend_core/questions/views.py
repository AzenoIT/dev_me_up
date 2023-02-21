
from rest_framework import generics

from .models import Question
from .serializers import QuestionSerializer


class TenQuestionsListAPIView(generics.ListAPIView):
    serializer_class = QuestionSerializer

    def get_queryset(self):
        return Question.objects.all()[0:10]
