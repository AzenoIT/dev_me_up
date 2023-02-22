from rest_framework import serializers

from players.serializers import PlayerSerializer
from . import models

class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Badge
        fields = ('name', 'weight', 'points')


class PlayersToBadgeSerializer(serializers.ModelSerializer):
    badge = BadgeSerializer()
    player = PlayerSerializer()
    class Meta:
        model = models.PlayersToBadge
        fields = ('player', 'badge', 'creation_date')