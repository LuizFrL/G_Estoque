from rest_framework.viewsets import ModelViewSet
from feedback.models import FeedbackModel, FeedbackTypeModel
from feedback.serializers import FeedbackModelSerializer, \
    FeedbackTypeModelSerializer


class FeedbackModelViewSet(ModelViewSet):
    serializer_class = FeedbackModelSerializer

    def get_queryset(self):
        return FeedbackModel.objects.all()


class FeedbackTypeModelViewSet(ModelViewSet):
    serializer_class = FeedbackTypeModelSerializer

    def get_queryset(self):
        return FeedbackTypeModel.objects.all()
