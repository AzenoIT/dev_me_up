from rest_framework import serializers

from . import models

class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Badge
        fields = ('name', 'weight', 'points')


class PlayersToBadgeSerializer(serializers.ModelSerializer):
    badge_name = serializers.CharField(source='badge.name', read_only=True)
    badge_weight = serializers.CharField(source='badge.weight', read_only=True)
    badge_points = serializers.CharField(source='badge.points', read_only=True)

    class Meta:
        model = models.PlayersToBadge
        fields = ('player', 'badge', 'creation_date', 'badge_name', 'badge_weight', 'badge_points')
