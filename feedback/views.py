from django.http import JsonResponse, HttpResponse
from rest_framework.parsers import JSONParser
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

    def create(self, request, *args, **kwargs):
        data = JSONParser().parse(request)
        serializer = FeedbackModelSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    def update(self, request, *args, **kwargs):
        try:
            feedback = FeedbackModel.objects.get(pk=kwargs.get('pk'))
        except FeedbackModel.DoesNotExist:
            return HttpResponse(status=404)

        data = JSONParser().parse(request)
        serializer = FeedbackModelSerializer(feedback, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

