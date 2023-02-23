from rest_framework import serializers

from .models import Badge

class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = ('name', 'weight', 'points')
