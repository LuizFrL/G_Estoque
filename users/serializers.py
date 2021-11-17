from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        if validated_data.get('is_superuser'):
            return Response(User.objects.create_superuser(**validated_data),
                            status.HTTP_201_CREATED)
        return Response(User.objects.create_user(**validated_data),
                        status.HTTP_201_CREATED)

    def update(self, instance, validated_data):
        user = User.objects.get(username=instance)
        user.set_password(validated_data['password'])
        user.save()
        return user
