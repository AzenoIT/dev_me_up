from django.urls import path
from . import views

app_name = 'quizzes'

urlpatterns = [
    path('game/', views.GameApiView.as_view(), name='game')
]