
from rest_framework import generics

from ds.question_set_generator import question_set_generator
from .models import Question
from .serializers import QuestionSerializer


class TenQuestionsListAPIView(generics.ListAPIView):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
