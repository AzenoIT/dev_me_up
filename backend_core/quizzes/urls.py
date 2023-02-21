from django.urls import path

from . import views

app_name = 'quizzes'

urlpatterns = [
    path('new-game/', views.NewGameAPIView.as_view(), name='new_game'),
]
