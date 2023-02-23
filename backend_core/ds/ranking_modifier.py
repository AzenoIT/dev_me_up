import math

# K-factor
# the higher the K, the higher the sensitivity and point exchange
# k = 40 for new players until completion of 30 games or under 2300 rating
# k = 20 for players that never achieved rating of 2400
# k = 10 for players who achieved rating 2400 in the past

# calculating expected score of the game

def probability_of_winning(rating_1, rating_2):
    return 1 / (1 + math.pow(10, (rating_2 - rating_1) / 400))


# calculating rating change
# if player A won, outcome = 1
# if player A lost, outcome = 2
# if draw, outcome = 0


def calculate_new_ratings(player_a_rating, player_b_rating, outcome):
    probability_of_player_a_winning = probability_of_winning(player_a_rating, player_b_rating)
    probability_of_player_b_winning = probability_of_winning(player_b_rating, player_a_rating)

    if player_a_rating > 2400:
        k_a = 10
    elif player_a_rating > 1500:
        k_a = 20
    else:
        k_a = 40

    if player_b_rating > 2400:
        k_b = 10
    elif player_b_rating > 1500:
        k_b = 20
    else:
        k_b = 40

    print(k_a, k_b)
    print(probability_of_player_a_winning, probability_of_player_b_winning)
    if outcome == 1:
        player_a_rating = int(player_a_rating + k_a * (1 - probability_of_player_a_winning))
        player_b_rating = int(player_b_rating + k_b * (0 - probability_of_player_b_winning))
    elif outcome == 2:
        player_a_rating = int(player_a_rating + k_a * (0 - probability_of_player_a_winning))
        player_b_rating = int(player_b_rating + k_b * (1 - probability_of_player_b_winning))
    elif outcome == 0:
        player_a_rating = int(player_a_rating if player_a_rating > player_b_rating else
                              (player_a_rating + k_a * (0.5 - probability_of_player_a_winning)))
        player_b_rating = int(player_b_rating if player_b_rating > player_a_rating
                              else (player_b_rating + k_b * (0.5 - probability_of_player_b_winning)))

    return player_a_rating, player_b_rating

