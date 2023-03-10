from players.models import Player

from badgdes.models import Badge, PlayersToBadge
from game.models import Game

from django.db.models import Q

badges_id = {'novitiate': 1,
             'intern': 2,
             'bully': 3,
             'underdog': 4,
             'junior': 5,
             'programmer': 6,
             'lead': 7,
             'master': 8,
             'guru': 9,
             'night_owl': 10}

badges_quantity = {2: 5,
                   5: 20,
                   6: 50,
                   7: 100,
                   8: 150,
                   9: 200}


def generate_initiation_badge(player_uuid):
    badge_initial_id = 1
    player_initial_badge = PlayersToBadge.objects.filter(id=player_uuid, badge=badge_initial_id).count()

    if player_initial_badge == 0:
        new_player_to_badge = PlayersToBadge(player=player_uuid, badge=badge_initial_id)
        new_player_to_badge.save()
    else:
        pass


def programming_intern_badge(player_uuid):
    badge_initial_id = 2

    player = Player.objects.get(id=player_uuid)
    has_badge = PlayersToBadge.objects.filter(player=player, badge=badge_initial_id).exists()
    won_five_games = Game.objects.filter(Q(ga_player1=player) | Q(ga_player2=player), ga_result=1).count() == 5

    if has_badge and won_five_games:
        pass

    if not has_badge and won_five_games:
        player_badge = PlayersToBadge(player=player_uuid, badge=badge_initial_id)
        player_badge.save()

    else:
        pass


def bully_badge(player_id):
    pass


def underdog_badge(player_id):
    pass


def night_owl(player_id):
    pass
