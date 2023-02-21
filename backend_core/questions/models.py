from django.db import models


class Question(models.Model):
    question = models.CharField(max_length=255)
    correct_answer = models.CharField(max_length=300)
    wrong_answer_1 = models.CharField(max_length=300)
    wrong_answer_2 = models.CharField(max_length=300)
    wrong_answer_3 = models.CharField(max_length=300)
    technology = models.ForeignKey('technologies.Technology', on_delete=models.DO_NOTHING, related_name='%(class)s')

    def __str__(self):
        return self.question
