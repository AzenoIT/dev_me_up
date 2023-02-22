from . import views, viewsets
from rest_framework.routers import DefaultRouter

app_name = 'players'

router = DefaultRouter()
router.register(r'players', viewsets.PlayerViewSet, basename='player')

urlpatterns = [
    *router.urls,
]
