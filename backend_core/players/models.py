from django.db import models


class Player(models.Model):
    nick = models.CharField(max_length=30)
    rank = models.FloatField()
    is_bot = models.BooleanField(default=False)

    def __str__(self):
        return self.nick
