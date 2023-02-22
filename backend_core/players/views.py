from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from badges.models import PlayersToBadge
from badges.serializers import PlayersToBadgeSerializer
from ds.nick_generator import generate_nick
from technologies.models import TechnologiesToPlayers
from technologies.serializers import TechnologiesToPlayersSerializer, TechnologiesSerializer


class GenerateNickView(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        nick = generate_nick()
        return Response(nick, status=status.HTTP_200_OK)


class PlayerTechnologiesList(APIView):
    def post(self, request, *args, **kwargs):
        player = request.data.get('uuid')
        technologies = TechnologiesToPlayers.objects.filter(player__uuid=player)

        serializer = TechnologiesToPlayersSerializer(technologies, many=True)
        return Response(serializer.data, status=status.HTTP_302_FOUND)


class PlayerBadgeList(APIView):
    def post(self, request, *args, **kwargs):
        player = request.data.get('uuid')
        badges = PlayersToBadge.objects.filter(player__uuid=player)

        serializer = PlayersToBadgeSerializer(badges, many=True)

        return Response(serializer.data, status=status.HTTP_302_FOUND)
