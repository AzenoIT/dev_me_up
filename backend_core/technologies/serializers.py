from players.serializers import PlayerSerializer
from .models import Technology, TechnologiesToPlayers
from rest_framework import serializers


class TechnologiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ('name', 'id')


class TechnologiesToPlayersSerializer(serializers.ModelSerializer):
    technology = TechnologiesSerializer()
    player = PlayerSerializer()

    class Meta:
        model = TechnologiesToPlayers
        fields = ('technology', 'player')
