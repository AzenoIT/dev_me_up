from django.db import models


class Badge(models.Model):
    name = models.CharField(max_length=50, unique=True)
    weight = models.PositiveIntegerField(default=1)
    points = models.PositiveIntegerField(default=0)


class PlayersToBadge(models.Model):
    player = models.ForeignKey('players.Player', on_delete=models.DO_NOTHING, related_name='%(class)s')
    badge = models.ForeignKey('Badge', on_delete=models.DO_NOTHING, related_name='%(class)s')
    creation_date = models.DateTimeField(auto_now_add=True)
