from django.urls import path

from . import views

app_name = 'questions'

urlpatterns = [
    path('ten-questions/', views.TenQuestionsListAPIView.as_view(), name='ten_questions_list'),
]
