from django.urls import path, include
from drf_yasg.utils import swagger_auto_schema
from rest_framework import routers, status
from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)
from users.views import UserViewSet

decorated_token = \
    swagger_auto_schema(
        method='post',
        responses={status.HTTP_201_CREATED: TokenRefreshSerializer}
    )(TokenObtainPairView.as_view())

router = routers.DefaultRouter()
router.register(r"user", UserViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('api/token/', decorated_token,
         name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(),
         name='token_refresh'),
]
