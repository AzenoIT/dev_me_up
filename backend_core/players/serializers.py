from rest_framework import serializers

from .models import Player
from technologies.serializers import TechnologiesToPlayersSerializer


class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        fields = ('pk', 'nick', 'rank', 'is_active', 'is_online', 'is_bot', 'isSearchVisible', 'isRankVisible', 'theme')
