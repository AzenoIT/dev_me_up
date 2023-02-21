from gamesets.models import GameSet
from technologies.models import Technology
from players.models import Player


def question_set_generator(technology, player1_id, player2_id):
    """player1 is an actual player, player2 might be either live player or bot"""
    player1_data = Player.objects.get(id=player1_id)
    player2_data = Player.objects.get(id=player2_id)

    if player1_data.rank is not None:
        average_scoring = (player2_data.rank + player1_data.rank)/2
    else:
        average_scoring = 100

    scoring_to_lvl = {
        1: (0, 799),
        2: (800, 1699),
        3: (1700, 2299),
        4: (2300, 3000),
    }

    question_lvl_avg = 0

    for key, value in scoring_to_lvl.items():
        if (average_scoring >= value[0]) and (average_scoring <= value[1]):
            question_lvl_avg = key

    if question_lvl_avg == 1:
        dif_range = (1, question_lvl_avg + 1)
    elif question_lvl_avg == 4:
        dif_range = (question_lvl_avg - 1, 4)
    else:
        dif_range = (question_lvl_avg - 1, question_lvl_avg + 1)

    questions_base = GameSet.objects.filter(technologies=technology, difficulty_level__range=dif_range)

    set_len = questions_base.count()

    if set_len >= 10:
        question_set = questions_base.order_by('?')[0:10]
        return question_set
    else:
        question_set = GameSet.objects.filter(technologies=technology).order_by('-difficulty_level')[0:10]
        return question_set
