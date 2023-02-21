from django.contrib.auth import get_user_model
from rest_framework import status
<<<<<<< HEAD
from rest_framework.generics import CreateAPIView, UpdateAPIView
=======
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
>>>>>>> 90df9f2e6185bc56617424a63776203df4bfa2ef
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from . import serializers
from .serializers import CustomUserSerializer


class CreateUserAPIView(CreateAPIView):
    serializer_class = serializers.CustomUserSerializer
    queryset = get_user_model().objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



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
    serializer_class = CustomUserSerializer

    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data)

