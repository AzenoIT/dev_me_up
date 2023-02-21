from .models import Technology
from rest_framework import serializers


class TechnologiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ('name', 'id')
