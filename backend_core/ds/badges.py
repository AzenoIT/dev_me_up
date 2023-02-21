from dev_me_up.backend_core.players.models import Player, Badge, PlayerBadge


def generate_initiation_badge(player_id):
    badge_id = 0
    player = Player.objects.get(id=player_id)
    player_badge = PlayerBadge.objects.filter(player=player, badge__id=badge_id)

    if player_badge is None:
        badge = Badge.objects.get(id=badge_id)
        player_badge = PlayerBadge(player=player, badge=badge)
        player_badge.save()
    else:
        pass


def programming_intern(player_id):
    badge_id = 1

    player = Player.objects.get(id=player_id)
    badge = Badge.objects.get(id=badge_id)

    has_badge = PlayerBadge.objects.filter(player=player, badge=badge).exists()

    #rozgrywka
    won_five_games = Game.objects.filter(player=player, difficulty=1, result='W').count() >= 5

    if has_badge and won_five_games:
        pass

    if not has_badge and won_five_games:
        player_badge = PlayerBadge(player=player, badge=badge)
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
