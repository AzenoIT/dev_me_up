from django.db import models


class SourceSet(models.Model):

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class GameSet(models.Model):
    source_set = models.ForeignKey('SourceSet', on_delete=models.DO_NOTHING, related_name='%(class)s')
    technologies = models.ForeignKey('technologies.Technology', on_delete=models.DO_NOTHING)

    difficulty_level = models.FloatField()
    question = models.CharField(max_length=255)
    correct_answer = models.CharField(max_length=255)
    add_answer1 = models.CharField(max_length=255)
    add_answer2 = models.CharField(max_length=255)
    add_answer3 = models.CharField(max_length=255)

    def __str__(self):
        return self.question
