from rest_framework.response import Response
from rest_framework.views import APIView

from ds.question_set_generator import question_set_generator
from gamesets.models import Game
from players.models import Player
from .models import Quiz


class NewGameAPIView(APIView):
    def post(self, request):
        print('*' * 40)
        print(request.data)
        print('*' * 40)
        game_type = request.data.get('type')
        player_1 = Player.objects.get(pk=request.data.get('player_1'))
        player_2 = Player.objects.get(pk=request.data.get('player_2'))

        quiz = Quiz.objects.create(duration_minutes=0)
        questions_set = question_set_generator(game_type, player_1.id, player_2.id)

        for question in questions_set.iterator():
            Game.objects.create(
                player_id_1_id=player_1.id,
                player_id_2_id=player_2.id,
                result=0,
                game_sets_id=question.id,
                quiz_id=quiz.id
            )

        return Response(questions_set[0])

