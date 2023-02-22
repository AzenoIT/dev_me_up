from django.urls import path

from . import views

app_name = 'players'

urlpatterns = [
    path('nick-generator/', views.GenerateNickNameView.as_view(), name='nick_generator'),
]
