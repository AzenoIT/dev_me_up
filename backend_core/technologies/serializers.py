from .models import Technologies
from rest_framework import serializers


class TechnologiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technologies
        fields = ('name', 'id')
