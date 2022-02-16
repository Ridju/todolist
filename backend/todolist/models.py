from django.db import models
from django.conf import settings


class Todo(models.Model):
    todo = models.CharField(max_length=120)
    done = models.BooleanField(default=False)
    created = models.TimeField(auto_now_add=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)