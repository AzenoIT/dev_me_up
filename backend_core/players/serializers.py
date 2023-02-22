from rest_framework import serializers

from .models import Player


class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        fields = ('pk', 'nick', 'rank', 'is_active', 'is_online',)