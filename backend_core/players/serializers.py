from rest_framework import serializers

from .models import Player
from backend_core.technologies.serializers import TechnologiesSerializer


class PlayerSerializer(serializers.ModelSerializer):
    technologies = TechnologiesSerializer()

    class Meta:
        model = Player
        fields = ('pk', 'nick', 'rank', 'is_active', 'is_online', 'technologies')
