from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from . import serializers

class CreateUserAPIView(CreateAPIView):
    serializer_class = serializers.CustomUserSerializer
    queryset = get_user_model().objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)