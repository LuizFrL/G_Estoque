from django.urls import path, include
from rest_framework import routers
from estoque.views import EstoqueViewSet


router = routers.DefaultRouter()
router.register(r'estoque', EstoqueViewSet)

urlpatterns = [
    path('', include(router.urls))
]
