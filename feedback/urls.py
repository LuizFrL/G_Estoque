from django.urls import path, include
from rest_framework import routers

from feedback.views import FeedbackModelViewSet, FeedbackTypeModelViewSet

router = routers.DefaultRouter()
router.register(r"feedback", FeedbackModelViewSet, basename='')
router.register(r"feed-types", FeedbackTypeModelViewSet, basename='')


urlpatterns = [
    path("", include(router.urls)),
]

