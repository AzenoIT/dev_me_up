from rest_framework.generics import ListAPIView

from . import models
from . import serializers


class InfographicAPIView(ListAPIView):
    queryset = models.Infographic.objects.all()
    serializer_class = serializers.InfographicSerializer
