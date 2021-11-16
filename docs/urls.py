from django.urls import path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

API_TITLE = "API G Estoque"
API_DESC = """API que possui todos os recursos para melhor
gerenciar suas atividades empresarias, feito com as tecnologias 
mais influentes no mercado"""

schema_view = get_schema_view(
    openapi.Info(
        title=API_TITLE,
        default_version='v1',
        description=API_DESC,
        contact=openapi.Contact(email="luizfernandorole@sempreceub.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('doc/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('docs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
