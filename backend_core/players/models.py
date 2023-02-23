import uuid

from django.contrib.auth import get_user_model
from django.db import models


class Player(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, db_index=True)
    nick = models.CharField(max_length=30)
    rank = models.FloatField()
    is_active = models.BooleanField(default=False)
    is_online = models.BooleanField(default=False)
    is_bot = models.BooleanField(default=False)
    is_search_visible = models.BooleanField(default=False)
    is_rank_visible = models.BooleanField(default=False)
    theme = models.BooleanField(default=False)

    def __str__(self):
        return self.nick


class PlayerFriend(models.Model):
    player = models.ForeignKey('Player', on_delete=models.CASCADE, related_name='player')
    friend = models.ForeignKey('Player', on_delete=models.CASCADE, related_name='player_friend')
    approved = models.BooleanField(default=False)
    relation = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.player} has friendship relation with {self.friend}'
