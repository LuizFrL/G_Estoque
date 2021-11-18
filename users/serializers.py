from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.serializers import ValidationError


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        if validated_data.get('is_superuser'):
            return User.objects.create_superuser(**validated_data)
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        user = User.objects.get(username=instance)
        request = self.context.get("request")
        if instance == request.user:
            user.set_password(validated_data['password'])
            user.save()
            return user
        raise ValidationError(
            {"error": "The logged user is different from the "
                      "user who wants to change the password."})
