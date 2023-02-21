from rest_framework.generics import ListAPIView

from technologies.models import Technology
from technologies.serializers import TechnologiesSerializer


class TechnologyListView(ListAPIView):
    serializer_class = TechnologiesSerializer
    queryset = Technology.objects.all()
