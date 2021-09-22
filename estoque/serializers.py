from rest_framework.serializers import ModelSerializer
from estoque.models import EstoqueModel


class EstoqueSerializer(ModelSerializer):
    class Meta:
        model = EstoqueModel
        fields = '__all__'
