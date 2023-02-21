import random
from nick_generator import generate_nick
from ..players.models import Player


def generate_the_expected_amount_of_players():
    bins = {
        1: [3, 0, 250],
        2: [10, 251, 500],
        3: [12, 501, 750],
        4: [16, 751, 1000],
        5: [18, 1001, 1250],
        6: [14, 1251, 1500],
        7: [10, 1501, 1750],
        8: [8, 1751, 2000],
        9: [6, 2001, 2400],
        10: [3, 2401, 2800]
    }
    return bins


def generate_bots():
    bins = generate_the_expected_amount_of_players()
    for el in bins:
        players_quantity = Player.objects.filter(is_active=True).filter(rank__gte=el[1]).filter(rank__gle=el[2]).count()
        if players_quantity > el[0]:
            # deactive boots in this range
            bots_to_inactive = Player.objects.filter(is_active=True).filter(is_bot=True).filter(rank__gte=el[1]).filter(
                rank__gle=el[2]).order_by('?').first(players_quantity - bins[0])
            bots_to_inactive.update(is_active=False)
        else:
            # add bots in this bin range
            for player in range(bins[0] - players_quantity):
                new_player_rank = random.randint(el[1], el[2])
                # brakuje sprawdzenia czy nick już nie istnieje
                new_player_nick = generate_nick(1)
                new_player = Player(nick=new_player_nick, rank=new_player_rank, is_active=True, is_bot=True,
                                    is_online=True)
                new_player.save()
