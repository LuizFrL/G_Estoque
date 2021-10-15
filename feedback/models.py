from django.db import models


# Create your models here.
class FeedbackTypeModel(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.TextField(unique=True)


class FeedbackModel(models.Model):
    type = models.ForeignKey(FeedbackTypeModel, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    email = models.EmailField()
    feedback = models.TextField(max_length=600)

