from django.contrib.auth import get_user_model
from rest_framework import serializers
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
        print(validated_data)
        instance = self.Meta.model.objects.create_user(**validated_data)
        return instance


class UserFriendListSerializer(ModelSerializer):
    user_friend = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = UserFriend
        fields = ('user_id', 'friend_id', 'approved', 'user_friend')
        print(fields[3])
