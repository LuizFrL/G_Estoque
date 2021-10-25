from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework import permissions
from users.serializers import UserSerializer


# Permission class
class IsAdminUser(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser)


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]

    def create(self, request, *args, **kwargs):
        new_user = request.data
        serializer = UserSerializer(data=new_user)
        if serializer.is_valid():
            if new_user['is_superuser']:
                user = User.objects.create_superuser(
                    username=new_user['username'],
                    password=new_user['password'],
                    email=new_user['email'])
            else:
                user = User.objects.create_user(username=new_user['username'],
                                                password=new_user['password'],
                                                email=new_user['email'])
            return JsonResponse(
                {'id': user.pk, 'username': new_user['username'],
                 'email': new_user['email']}, status=201)
        return JsonResponse(serializer.errors, status=400)
