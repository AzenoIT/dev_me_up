import random

from players.models import Player


def match_bot(player_uuid):
    player = Player.objects.filter(uuid=player_uuid)

    queryset_bot = Player.objects.filter(is_bot=True, is_active=True, is_online=True,
                                         rank__range=(player.rank, player.rank * 1.5))

    matched_player = random.choice(queryset_bot)

    return matched_player.uuid
