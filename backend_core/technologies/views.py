from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from players.models import Player
from technologies.models import Technology, TechnologiesToPlayers
from technologies.serializers import TechnologiesSerializer, TechnologiesToPlayersSerializer


class TechnologyListView(ListAPIView):
    serializer_class = TechnologiesSerializer
    queryset = Technology.objects.all()
