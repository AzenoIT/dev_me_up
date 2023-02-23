from datetime import timedelta, datetime
from random import shuffle

from rest_framework.response import Response
from rest_framework.views import APIView

from quizzes.serializers import GameSerializer

from quizzes.models import Quiz

from players.models import Player

from gamesets.models import Game

from gamesets.models import GameSet

from ds.bot_response import bot_single_response

from quizzes.serializers import AnswerSerializer


class GameApiView(APIView):
    def post(self, request):
        serializer = GameSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        new_quiz = Quiz.objects.create()
        new_quiz.save()

        player = Player.objects.get(uuid=serializer.data['uuid'])
        oponent = serializer.data['oponent']
        bot_flag = False

        if oponent is None:
            # match_bot(player)
            oponent = Player.objects.filter(is_bot=True).first()
            bot_flag = True

        else:
            oponent = Player.objects.get(uuid=serializer.data['oponent'])

        # questions = question_set_generator(serializer.data['technology_id'], player, oponent)

        # gameset
        questions = GameSet.objects.first()

        new_game = Game(
            player_id_1_id=player.id,
            player_id_2_id=oponent.id,
            game_sets_id=questions.id,
            quiz_id=new_quiz.id
        )

        if bot_flag:
            bot_answer, time_to_response = bot_single_response(new_game.id)
            new_game.answer_player_2 = False if bot_answer == 0 else True
            new_game.response_bot_time = str(datetime.now() + timedelta(seconds=6000))

        new_game.save()

        answer_1, answer_2, answer_3, answer_4 = questions.correct_answer, questions.add_answer1, questions.add_answer2, questions.add_answer3
        response_data = [answer_1, answer_2, answer_3, answer_4]
        shuffle(response_data)

        response_dict = {f'answer_{idx}': k for idx, k in enumerate(response_data, start=1)}
        response_dict['question'] = questions.question
        response_dict['id'] = questions.id

        print(response_dict)
        response_serializer = AnswerSerializer(data=response_dict)
        a = response_serializer.is_valid(raise_exception=True)

        return Response(response_serializer.data)
