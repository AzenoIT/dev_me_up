from django.http import Http404
from rest_framework.viewsets import ViewSet
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from . import models
from . import serializers
from .models import Player


class PlayerViewSet(ViewSet):

    queryset = models.Player.objects.all()

    def create(self, request):
        serializer = serializers.PlayerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        try:
            player = self.queryset.prefetch_related('technologiestoplayers', 'playerstobadge').get(pk=pk)
        except Player.DoesNotExist:
            raise Http404
        serializer = serializers.PlayerDetailSerializer(player)
        return Response(serializer.data)

    def partial_update(self, request, pk=None):
        player = get_object_or_404(queryset=self.queryset, pk=pk)
        serializer = serializers.PlayerSerializer(player, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)

    # TODO change float to bool
    def destroy(self, request, pk=None):
        player = get_object_or_404(queryset=self.queryset, pk=pk)
        player.is_active = False
        player.save()
        return Response(status=status.HTTP_200_OK)
