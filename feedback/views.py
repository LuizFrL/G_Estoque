from rest_framework.viewsets import ModelViewSet
from feedback.models import FeedbackModel, FeedbackTypeModel
from feedback.serializers import FeedbackModelSerializer, \
    FeedbackTypeModelSerializer


class FeedbackTypeModelViewSet(ModelViewSet):
    serializer_class = FeedbackTypeModelSerializer
    queryset = FeedbackTypeModel.objects.all()


class FeedbackModelViewSet(ModelViewSet):
    serializer_class = FeedbackModelSerializer
    filterset_fields = '__all__'
    queryset = FeedbackModel.objects.all()
