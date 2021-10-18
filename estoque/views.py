from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from estoque.models import EstoqueModel
from estoque.serializers import EstoqueSerializer


# Create your views here.
class EstoqueViewSet(viewsets.ModelViewSet):
    queryset = EstoqueModel.objects.all()
    serializer_class = EstoqueSerializer
    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    # Filters options

    # DjangoFilterBackend fields config,
    filter_fields = {
        'id': ['exact'],
        'nome': ['exact', 'contains'],
        'categoria': ['exact', 'contains'],
        'qtd': ['gte', 'lte', 'gt', 'lt'],
        'valor': ['gte', 'lte', 'gt', 'lt']
    }

    # OrderingFilter fields config,
    ordering_fields = '__all__'
    ordering = ['valor']

    # SearchFilter fields config,
    search_fields = ['nome', 'categoria']

