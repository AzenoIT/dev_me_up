from rest_framework import serializers

from .models import Infographic


class InfographicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Infographic
        fields = ('name', 'information')
