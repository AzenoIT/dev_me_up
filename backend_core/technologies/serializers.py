from .models import Technology, TechnologiesToPlayers
from rest_framework import serializers


class TechnologiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ('name', 'id')


class TechnologiesToPlayersSerializer(serializers.ModelSerializer):
    # technologies = TechnologiesSerializer()

    class Meta:
        model = TechnologiesToPlayers
        fields = ('__all__')
