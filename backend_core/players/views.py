from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ds.nick_generator import generate_nick


class GenerateNickView(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        nick = generate_nick()
        return Response(nick, status=status.HTTP_200_OK)
