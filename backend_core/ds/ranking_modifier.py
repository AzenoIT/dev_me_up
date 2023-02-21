import math

# K-factor
# the higher the K, the higher the sensitivity and point exchange
# k = 40 for new players until completion of 30 games or under 2300 rating
# k = 20 for players that never achieved rating of 2400
# k = 10 for players who achieved rating 2400 in the past

k = 20


# d = 1 if player A wins, d = 0 if player A loses

# d = 1

# calculating probability of winning the game

def probability_of_winning(rating_1, rating_2):
    return 1 / (1 + math.pow(10, (rating_1 - rating_2) / 400))


# calculating rating change
# if player A won, outcome = 1
# if player A lost, outcome = 2
# if draw, outcome = 0


def calculate_new_ratings(player_a_rating, player_b_rating, outcome, modifier=k):
    probability_of_player_a_winning = probability_of_winning(player_a_rating, player_b_rating)
    probability_of_player_b_winning = probability_of_winning(player_b_rating, player_a_rating)
    if outcome == 1:
        player_a_rating = int(player_a_rating + k * (1 - probability_of_player_a_winning))
        player_b_rating = int(player_b_rating + k * (0 - probability_of_player_b_winning))
    elif outcome == 2:
        player_a_rating = int(player_a_rating + k * (0 - probability_of_player_a_winning))
        player_b_rating = int(player_b_rating + k * (1 - probability_of_player_b_winning))
    elif outcome == 0:
        pass

    return player_a_rating, player_b_rating
