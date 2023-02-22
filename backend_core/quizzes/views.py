from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from ds.question_set_generator import question_set_generator
from gamesets.serializers import GameSerializer
from players.models import Player
from quizzes.models import Quiz


class NewGameAPIView(APIView):
    def post(self, request):
        game_type = request.data.get('type')
        player_1 = Player.objects.get(pk=int(request.data.get('player_1')))
        player_2 = Player.objects.get(pk=int(request.data.get('player_2')))
        print('*' * 20)
        print(player_1)
        print('*' * 20)
        questions_set = question_set_generator(game_type, player_1.id, player_2.id)
        quiz = Quiz.objects.create(duration_minutes=0)
        serializer = GameSerializer()
        for question in questions_set:
            data = {
                'player_id_1_id': player_1,
                'player_id_2_id': player_2,
                'quiz_id': quiz.id,
                'game_sets_id': question.id,
                'result': 0
            }
            serializer = GameSerializer(data=data)

        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)


        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
