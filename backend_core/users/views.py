from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import UpdateAPIView, ListAPIView, CreateAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import UpdateAPIView
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

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


class UserExistsView(APIView):
    def get(self, request):
        email = request.query_params.get('email')
        user = get_user_model().objects.filter(email=email).first()
        if user:
            return Response({'user_exists': True})
        else:
            return Response({'user_exists': False})