from django.db import models


class Infographic(models.Model):
    name = models.CharField(max_length=50)
    value = models.CharField(max_length=255)

    def __str__(self):
        return self.name
