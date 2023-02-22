from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import UpdateAPIView, ListAPIView, CreateAPIView, RetrieveAPIView
from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import UpdateAPIView
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.validators import UniqueTogetherValidator

from . import serializers
from . import models
from .models import UserFriend
from .serializers import UserFriendAddSerializer


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


class UserUpdateAPIView(UpdateAPIView):
    serializer_class = serializers.CustomUserSerializer
    queryset = get_user_model().objects.all()
    permission_class = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)


class GetUserAPIView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = get_user_model().objects.all()
    serializer_class = serializers.CustomUserSerializer

    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data)


class UserFriendAddAPIView(CreateAPIView):
    queryset = UserFriend.objects.all()
    serializer_class = UserFriendAddSerializer

    def create(self, request, *args, **kwargs):
        queryset = UserFriend.objects.all()
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        friends = queryset.values_list('friend_id')
        friend_list = []

        for friend in friends:
            friend_list.append(friend[0])

        if serializer.data.get('friend') not in friend_list:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid()
            serializer.save()
        else:
            print('you already have this friend')
        return Response(serializer.data, status=status.HTTP_201_CREATED)
