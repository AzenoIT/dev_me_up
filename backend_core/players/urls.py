from django.urls import path

from . import views

app_name = 'players'

urlpatterns = [
    path('generate-nick/', views.GenerateNickView.as_view(), name='generate_nick'),
]
