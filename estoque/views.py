from rest_framework import viewsets
from estoque.models import EstoqueModel
from estoque.serializers import EstoqueSerializer


# Create your views here.
class EstoqueViewSet(viewsets.ModelViewSet):
    queryset = EstoqueModel.objects.all()
    serializer_class = EstoqueSerializer
