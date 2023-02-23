import random
from .nick_generator import generate_nick
from players.models import Player



def generate_the_expected_amount_of_players():
    bins = {
        1: [50, 0, 250],
        2: [100, 251, 500],
        3: [120, 501, 750],
        4: [160, 751, 1000],
        5: [200, 1001, 1250],
        6: [170, 1251, 1500],
        7: [140, 1501, 1750],
        8: [80, 1751, 2000],
        9: [30, 2001, 2400],
        10: [10, 2401, 2800]
    }
    return bins


def generate_bots():
    bins = generate_the_expected_amount_of_players()
    for el in bins.values():
        players_quantity = Player.objects.filter(is_active=True).filter(rank__gte=el[1]).filter(rank__lte=el[2]).count()
        if players_quantity > el[0]:
            bots_to_inactive = Player.objects.filter(is_active=True).filter(is_bot=True).filter(rank__lte=el[2]).filter(rank__gte=el[1]).order_by('?')[:(players_quantity - el[0])]
            Player.objects.filter(id__in=bots_to_inactive.values_list('id', flat=True)).update(is_active=False)
        else:
            for player in range(el[0] - players_quantity):
                new_player_rank = random.randint(el[1], el[2])
                new_player_nick = generate_nick(1)[0]
                Player.objects.filter(nick=new_player_nick)

                new_player = Player(nick=new_player_nick, rank=new_player_rank, is_active=True, is_bot=True,is_online=True, is_search_visible=True, is_rank_visible=True, theme=False)
                new_player.save()
