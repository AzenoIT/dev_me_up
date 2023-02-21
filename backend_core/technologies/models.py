from django.db import models


class Technology(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Technologies'


class TechnologiesToPlayers(models.Model):
    player_rank = models.FloatField()
    technology = models.ForeignKey('technologies.Technology', on_delete=models.DO_NOTHING, related_name='%(class)s')
    player = models.ForeignKey('players.Player', on_delete=models.DO_NOTHING, related_name='%(class)s')
