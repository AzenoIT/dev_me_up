from django.db import models


class Question(models.Model):
    questions = models.CharField(max_length=255)
    answers = models.CharField(max_length=255)
    technologies = models.ForeignKey('technologies.Technology', on_delete=models.DO_NOTHING, related_name='%(class)s')

    def __str__(self):
        return self.questions
