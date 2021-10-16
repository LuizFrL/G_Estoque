from rest_framework.viewsets import ModelViewSet
from feedback.models import FeedbackModel, FeedbackTypeModel
from feedback.serializers import FeedbackModelSerializer, \
    FeedbackTypeModelSerializer, FeedbackCreateModelSerializer


class FeedbackTypeModelViewSet(ModelViewSet):
    serializer_class = FeedbackTypeModelSerializer
    queryset = FeedbackTypeModel.objects.all()


class FeedbackModelViewSet(ModelViewSet):
    serializer_class = FeedbackModelSerializer
    filterset_fields = '__all__'
    queryset = FeedbackModel.objects.all()


class FeedbackCreateModelViewSet(ModelViewSet):
    serializer_class = FeedbackCreateModelSerializer
    filterset_fields = '__all__'
    queryset = FeedbackModel.objects.all()
