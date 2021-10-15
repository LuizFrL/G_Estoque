from rest_framework.serializers import ModelSerializer
from feedback.models import FeedbackModel, FeedbackTypeModel


class FeedbackTypeModelSerializer(ModelSerializer):
    class Meta:
        model = FeedbackTypeModel
        fields = ['id', 'type']


class FeedbackModelSerializer(ModelSerializer):
    class Meta:
        model = FeedbackModel
        fields = ['id', 'type', 'email', 'feedback']

    depth = 1
