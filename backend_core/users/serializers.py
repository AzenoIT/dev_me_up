from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer

from .models import UserFriend


class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('email', 'password', 'username', 'first_name', 'last_name')
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        instance = self.Meta.model.objects.create_user(**validated_data)
        return instance


class UserFriendListSerializer(ModelSerializer):
    friend = CustomUserSerializer()

    class Meta:
        model = UserFriend
        fields = ('friend', 'approved')


class UserFriendAddSerializer(ModelSerializer):
    class Meta:
        model = UserFriend
        fields = ('user', 'friend', 'approved')

