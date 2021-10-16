from django.db import models


# Create your models here.
class EstoqueModel(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.TextField(max_length=200, blank=False, unique=True)
    categoria = models.TextField(max_length=100, blank=False)
    qtd = models.IntegerField(blank=False, default=1)
    valor = models.DecimalField(decimal_places=2, max_digits=100)
