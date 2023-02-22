from .models import Technology, TechnologiesToPlayers
from rest_framework import serializers


class TechnologiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ('name', 'id')


class TechnologiesToPlayersSerializer(serializers.ModelSerializer):
    technology_name = serializers.CharField(source='technology.name', read_only=True)

    class Meta:
        model = TechnologiesToPlayers
        fields = ('pk', 'player', 'player_rank', 'technology_name',)
