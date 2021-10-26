from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        if validated_data.get('is_superuser'):
            return User.objects.create_superuser(**validated_data)
        return User.objects.create_user(**validated_data)
