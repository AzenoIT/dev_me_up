from dev_me_up.backend_core.players.models import Player, Badge, Player_to_Badge, Game
from django.db.models import Q


def generate_initiation_badge(player_id):
    badge_initial_id = 1
    player_initial_badge = Player_to_Badge.objects.filter(id=player_id, badge_id=badge_initial_id).count()
    # player_badges = PlayerBadge.objects.filter(id=player_id)

    if player_initial_badge == 0:
        new_player_to_badge = Player_to_Badge(player_id=player_id, badge_id=badge_initial_id)
        new_player_to_badge.save()
    else:
        pass


def programming_intern_badge(player_id):
    badge_initial_id = 2

    player = Player.objects.get(id=player_id)
    has_badge = Player_to_Badge.objects.filter(player=player, badge_id=badge_initial_id).exists()
    won_five_games = Game.objects.filter(Q(ga_player1=player) | Q(ga_player2=player), ga_result=1).count() >= 5

    if has_badge and won_five_games:
        pass

    if not has_badge and won_five_games:
        player_badge = Player_to_Badge(player_id=player_id, badge_id=badge_initial_id)
        player_badge.save()

    else:
        pass


def check_badges():
    pass


def bully_badge(player_id):
    pass


def underdog_badge(player_id):
    pass


def night_owl(player_id):
    pass
