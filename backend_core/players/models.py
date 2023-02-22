from django.db import models


class Player(models.Model):
    nick = models.CharField(max_length=30)
    rank = models.FloatField()
    is_active = models.BooleanField(default=False)
    is_online = models.BooleanField(default=False)
    is_bot = models.BooleanField(default=False)
    isSearchVisible = models.BooleanField(default=False)
    isRankVisible = models.BooleanField(default=False)
    theme = models.BooleanField(default=False)

    def __str__(self):
        return self.nick


class Badge(models.Model):
    name = models.CharField(max_length=50, unique=True)
    weight = models.PositiveIntegerField(default=1)
    points = models.PositiveIntegerField(default=0)


class PlayersToBadge(models.Model):
    player = models.ForeignKey('players.Player', on_delete=models.DO_NOTHING, related_name='%(class)s')
    badge = models.ForeignKey('players.Badge', on_delete=models.DO_NOTHING, related_name='%(class)s')
    creation_date = models.DateTimeField(auto_now_add=True)