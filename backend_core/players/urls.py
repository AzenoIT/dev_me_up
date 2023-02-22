from django.urls import path

from . import views, viewsets
from rest_framework.routers import DefaultRouter

app_name = 'players'

router = DefaultRouter()
router.register(r'players', viewsets.PlayerViewSet, basename='player'),

urlpatterns = [
    path('generate-nick/', views.GenerateNickView.as_view(), name='generate_nick'),
    path('players/technologies', views.PlayerTechnologiesList.as_view(), name='players_technologies'),
    *router.urls,
]
