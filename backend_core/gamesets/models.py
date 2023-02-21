from django.db import models


class SourceSet(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class GameSet(models.Model):
    source_set = models.ForeignKey('SourceSet', on_delete=models.DO_NOTHING, related_name='%(class)s')
    technologies = models.ForeignKey('technologies.Technology', on_delete=models.DO_NOTHING, related_name='%(class)s')

    difficulty_level = models.FloatField()
    question = models.CharField(max_length=255)
    correct_answer = models.CharField(max_length=255)
    add_answer1 = models.CharField(max_length=255)
    add_answer2 = models.CharField(max_length=255)
    add_answer3 = models.CharField(max_length=255)

    def __str__(self):
        return self.question


class Game(models.Model):
    player_id_1 = models.ForeignKey('players.Player', on_delete=models.DO_NOTHING, related_name='+')
    player_id_2 = models.ForeignKey('players.Player', on_delete=models.DO_NOTHING, related_name='+')
    result = models.IntegerField()
    date_start = models.DateTimeField()
    date_end = models.DateTimeField()
    game_sets = models.ForeignKey('GameSet', on_delete=models.CASCADE, related_name='%(class)s')

    def __str__(self):
        return f"{self.player_id_1} vs. {self.player_id_2}"
