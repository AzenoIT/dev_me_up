from django.db import models


class Question(models.Model):
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=255)
    technology = models.ForeignKey('technologies.Technology', on_delete=models.DO_NOTHING, related_name='%(class)s')

    def __str__(self):
        return self.question
