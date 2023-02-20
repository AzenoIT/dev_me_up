from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer


class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        instance = self.Meta.model.objects.create_user(**validated_data)
        return instance
