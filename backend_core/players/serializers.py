from rest_framework import serializers

from badges.models import PlayersToBadge
from .models import Player
from technologies.serializers import TechnologiesToPlayersSerializer



class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        fields = ('pk', 'uuid', 'nick', 'rank', 'is_active', 'is_online', 'is_bot', 'is_search_visible',
                  'is_rank_visible', 'theme')


class PlayersToBadgeSerializer(serializers.ModelSerializer):
    player = PlayerSerializer()
    badge_name = serializers.CharField(source='badge.name', read_only=True)
    badge_weight = serializers.CharField(source='badge.weight', read_only=True)
    badge_points = serializers.CharField(source='badge.points', read_only=True)

    class Meta:
        model = PlayersToBadge
        fields = ('player', 'badge', 'creation_date', 'badge_name', 'badge_weight', 'badge_points')


class PlayerDetailSerializer(serializers.ModelSerializer):
    technologiestoplayers = TechnologiesToPlayersSerializer(many=True)
    playerstobadge = PlayersToBadgeSerializer(many=True)

    class Meta:
        model = Player
        fields = ('pk', 'uuid', 'nick', 'rank', 'is_active', 'is_online', 'is_bot', 'is_search_visible',
                  'is_rank_visible', 'theme', 'technologiestoplayers', 'playerstobadge')



