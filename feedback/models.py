from django.db import models


# Create your models here.

class FeedbackTypeModel(models.Model):
    type = models.TextField(unique=True)


class FeedbackModel(models.Model):
    type_id = models.ForeignKey(FeedbackTypeModel,
                                on_delete=models.CASCADE)
    email = models.EmailField()
    feedback = models.TextField(max_length=600)
