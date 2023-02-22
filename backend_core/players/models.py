import uuid

from django.db import models


class Player(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, db_index=True)
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
