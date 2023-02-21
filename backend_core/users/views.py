from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response

from . import serializers
from . import models


class CreateUserAPIView(CreateAPIView):
    serializer_class = serializers.CustomUserSerializer
    queryset = get_user_model().objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class UserFriendListAPIView(ListAPIView):
    queryset = models.UserFriend.objects.all()

    def get(self, request, *args, **kwargs):
        user_id = request.user.id
        serializer = serializers.UserFriendListSerializer(self.queryset.filter(user__pk=user_id), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
