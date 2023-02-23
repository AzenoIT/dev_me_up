from rest_framework import serializers

from .models import PlayerRankHistory
from ..players.serializers import PlayerSerializer


class PlayerRankHistorySerializer(serializers.ModelSerializer):
    player = PlayerSerializer()
    class Meta:
        model = PlayerRankHistory
        fields = ('pk', 'new_value', 'rank_change_date')
