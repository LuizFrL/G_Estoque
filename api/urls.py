from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path('', include('docs.urls')),
    path('', include(router.urls)),
    path('', include('feedback.urls')),
    path('', include('estoque.urls')),
    path('', include('users.urls')),
]
