from django.urls import path
from estoque.models import EstoqueModel


urlpatterns = [
    path('estoque/', EstoqueModel)
]
