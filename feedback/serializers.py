from rest_framework.serializers import ModelSerializer
from feedback.models import FeedbackModel, FeedbackTypeModel


class FeedbackTypeModelSerializer(ModelSerializer):
    class Meta:
        model = FeedbackTypeModel
        fields = '__all__'


class FeedbackModelSerializer(ModelSerializer):
    class Meta:
        model = FeedbackModel
        fields = '__all__'
    depth = 1


class FeedbackCreateModelSerializer(ModelSerializer):
    class Meta:
        model = FeedbackModel
        fields = '__all__'
