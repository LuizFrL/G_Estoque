from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from users.serializers import UserSerializer


class IsAdminOrPatchRequest(permissions.BasePermission):

    def has_permission(self, request, view):
        return bool(
            request.method == 'PATCH' and request.user.is_authenticated
            or
            request.user and request.user.is_superuser
        )


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminOrPatchRequest]

    lookup_field = "username"
