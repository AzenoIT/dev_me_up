from django.db import models


class PlayerRankHistory(models.Model):
    new_value = models.FloatField()
    rank_change_date = models.DateTimeField(auto_now_add=True)
    player = models.ForeignKey('players.Player', on_delete=models.DO_NOTHING, related_name='%(class)s')

    def __str__(self):
        return f'{self.new_value}'
