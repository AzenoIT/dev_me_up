from rest_framework import serializers

from .models import Player, PlayerFriend
from technologies.serializers import TechnologiesToPlayersSerializer
from badges.serializers import PlayersToBadgeSerializer


class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        fields = ('pk', 'uuid', 'nick', 'rank', 'is_active', 'is_online', 'is_bot', 'is_search_visible',
                  'is_rank_visible', 'theme')


class PlayerDetailSerializer(serializers.ModelSerializer):
    technologiestoplayers = TechnologiesToPlayersSerializer(many=True)
    playerstobadge = PlayersToBadgeSerializer(many=True)

    class Meta:
        model = Player
        fields = ('pk', 'uuid', 'nick', 'rank', 'is_active', 'is_online', 'is_bot', 'is_search_visible',
                  'is_rank_visible', 'theme', 'technologiestoplayers', 'playerstobadge')


class PlayerFriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerFriend
        fields = ('player', 'friend', 'approved', 'relation')
