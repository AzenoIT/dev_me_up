from rest_framework import serializers

from .models import Player
from technologies.serializers import TechnologiesToPlayersSerializer
from badges.serializers import PlayersToBadgeSerializer


class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        fields = "__all__"


class PlayerDetailSerializer(serializers.ModelSerializer):
    technologiestoplayers = TechnologiesToPlayersSerializer(many=True)
    playerstobadge = PlayersToBadgeSerializer(many=True)

    class Meta:
        model = Player
        fields = "__all__"
