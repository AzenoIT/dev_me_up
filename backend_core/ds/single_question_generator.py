from gamesets.models import Game, GameSet
from quizzes.models import Quiz


def single_question_generator(game_id, technology, declared_level=None):
    quiz = Quiz.objects.get(pk=game_id)
    games = Game.objects.all().filter(quiz=quiz)
    questions = GameSet.objects.all().filter(technology=technology)

    player = games.first().player_id_1
    opponent = games.first().player_id_2

    used_questions_id = []
    for game in games:
        question_id = game.game_sets.id
        used_questions_id.append(question_id)

    not_used_questions = questions.exclude(id__in=used_questions_id)

    if player.rank is not None:
        average_scoring = (player.rank + opponent.rank)/2
    else:
        average_scoring = 100

    scoring_to_lvl = {
        1: (0, 799),
        2: (800, 1699),
        3: (1700, 2299),
        4: (2300, 3000),
    }

    calc_diff_level = 1

    for key, value in scoring_to_lvl.items():
        if (average_scoring >= value[0]) and (average_scoring <= value[1]):
            calc_diff_level = key

    if declared_level is not None:
        new_question = not_used_questions.filter(difficulty_level=declared_level).order_by(
            '?').first()
    elif declared_level is None:
        new_question = not_used_questions.filter(difficulty_level=calc_diff_level).order_by(
            '?').first()
    else:
        new_question = not_used_questions.filter(difficulty_level=1).order_by('?').first()

    question_length = len(new_question.question)
    question_lvl = new_question.difficulty_level

    time_factor = (question_length / 200) * (1 / question_lvl)
    max_time = 120
    if time_factor <= 1:
        if (max_time * time_factor) > 15:
            question_time = max_time * time_factor
        else:
            question_time = 15
    else:
        question_time = max_time

    return new_question, question_time
