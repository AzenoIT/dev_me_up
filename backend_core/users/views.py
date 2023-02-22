import qrcode
from . import models
from . import serializers
from .models import CustomUser
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from django.http import HttpResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response



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


class GenerateQRCode(APIView):
    def get(self, request, pk):
        user = get_object_or_404(CustomUser, pk=pk)
        qr = qrcode.QRCode(
            version=1,
            box_size=10,
            border=1
        )
        data = f"{user.username} - {user.email}"
        qr.add_data(data)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        response = HttpResponse(content_type="image/png")
        img.save(response, "PNG")
        return response



