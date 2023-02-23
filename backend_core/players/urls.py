from django.urls import path


from .viewsets import PlayerViewSet
from .views import GenerateNickView, PlayerTechnologiesList, PlayerBadgeList, PlayerQuizList
from rest_framework.routers import DefaultRouter

app_name = 'players'

router = DefaultRouter()
router.register(r'players', PlayerViewSet, basename='player'),

urlpatterns = [
    path('generate-nick/', GenerateNickView.as_view(), name='generate_nick'),
    path('players/technologies', PlayerTechnologiesList.as_view(), name='players_technologies'),
    path('players/badges', PlayerBadgeList.as_view(), name='players_badges'),
    path('players/quizzes', PlayerQuizList.as_view(), name='players_quizzes'),
    *router.urls,
]
