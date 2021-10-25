import django_filters

from rest_framework import viewsets, permissions
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from estoque.models import EstoqueModel
from estoque.serializers import EstoqueSerializer


# Filter Set
class EstoqueFilterSet(django_filters.FilterSet):
    nome__not_contains = django_filters.CharFilter(lookup_expr='contains',
                                                   field_name='nome',
                                                   exclude=True)

    class Meta:
        model = EstoqueModel
        fields = {
            'id': ['exact', 'in'],
            'nome': ['exact', 'contains', 'startswith'],
            'categoria': ['exact', 'contains', 'startswith'],
            'qtd': ['exact', 'gte', 'lte', 'gt', 'lt'],
            'valor': ['exact', 'gte', 'lte', 'gt', 'lt'],
        }


# Permission class
class IsAdminOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        return bool(
            request.method in permissions.SAFE_METHODS or
            request.user and request.user.is_superuser
        )


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
    # Filter class
    filter_class = EstoqueFilterSet

    # OrderingFilter fields config,
    ordering_fields = '__all__'
    ordering = ['categoria', 'nome']

    # SearchFilter fields config,
    search_fields = ['nome', 'categoria']

    # Permission options
    permission_classes = [IsAdminOrReadOnly]
