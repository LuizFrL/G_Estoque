from django.urls import path, include
from rest_framework import routers

from feedback.views import FeedbackModelViewSet, FeedbackTypeModelViewSet

router = routers.DefaultRouter()
router.register(r"feedback", FeedbackModelViewSet)
router.register(r"feed-type", FeedbackTypeModelViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
