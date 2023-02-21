from rest_framework.generics import ListAPIView
from rest_framework.views import APIView

from technologies.models import Technology
from technologies.serializers import TechnologiesSerializer


class TechnologyListView(APIView):
    serializer_class = TechnologiesSerializer
    queryset = Technology.objects.all()
