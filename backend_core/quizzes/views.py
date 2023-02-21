from rest_framework.views import APIView

from ds.question_set_generator import question_set_generator
from gamesets.models import Game
from .models import Quiz


class NewGameAPIView(APIView):
    def post(self, request):
        game_type = request.get('type')
        player_1 = request.get('player_1')
        player_2 = request.get('player_2')
        quiz = Quiz.objects.create(duration_minutes=0)
        questions_set = question_set_generator(game_type, player_1, player_2)

        for question in questions_set.iterator():
            Game.objects.create(
                player_id_1=player_1,
                player_id_2=player_2,
                result=0,
                game_sets=question.id,
                quiz=quiz
            )

