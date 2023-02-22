from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from ds.nick_generator import generate_nick


class GenerateNickNameView(APIView):

    permission_classes = [permissions.AllowAny]
    def get(self, request):
        nickname = generate_nick()
        return Response(nickname, status=status.HTTP_200_OK)
