from rest_framework import serializers

from . import models

class BadgeSerializer(serializers.Modelserializer):
    class Meta:
        model = models.Badge
        fields = ('name', 'weight', 'points')


class PlayersToBadgeSerializer(serializers.Modelserializer):
    class Meta:
        model = models.PlayersToBadge
        fields = ('player', 'badge', 'creation_date')