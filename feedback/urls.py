from django.urls import path, include
from rest_framework import routers

from feedback.views import FeedbackModelViewSet, FeedbackTypeModelViewSet, \
    FeedbackCreateModelViewSet

router = routers.DefaultRouter()
router.register(r"feedback", FeedbackModelViewSet)
router.register(r"feedback_create", FeedbackCreateModelViewSet)
router.register(r"feed-type", FeedbackTypeModelViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
