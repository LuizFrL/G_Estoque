from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from feedback.models import FeedbackModel, FeedbackTypeModel


class FeedbackTypeModelSerializer(ModelSerializer):
    class Meta:
        model = FeedbackTypeModel
        fields = '__all__'


class FeedbackModelSerializer(ModelSerializer):
    type_id = FeedbackTypeModelSerializer(read_only=True)

    type = serializers.PrimaryKeyRelatedField(
        queryset=FeedbackTypeModel.objects.all(), source='type_id',
        write_only=True)

    class Meta:
        model = FeedbackModel
        fields = '__all__'
