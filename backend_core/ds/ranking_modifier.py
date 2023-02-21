import math

# Player A rating
# player_a_rating = 1200

# Player B rating

# player_b_rating = 800

# K-factor
# the higher the K, the higher the sensitivity and point exchange
# k = 40 for new players until completion of 30 games or under 2300 rating
# k = 20 for players that never achieved rating of 2400
# k = 10 for players who achieved rating 2400 in the past

k = 40

# d = 1 if player A wins, d = 0 if player A loses

# d = 1

# calculating probability of winning the game

def probability_of_winning(rating_1, rating_2):
    return 1 / (1 + math.pow(10, (rating_1 - rating_2)/400))

# calculating rating change

def calculate_new_ratings(player_a_rating, player_b_rating, outcome, modifier=k):
    # winning probability of player A
    probability_of_player_a_winning = probability_of_winning(player_a_rating, player_b_rating)
    # winning probability of player B
    probability_of_player_b_winning = probability_of_winning(player_b_rating, player_a_rating)
    # new_rating if A wins
    if outcome == 1:
        player_a_rating = player_a_rating + k * (1 - probability_of_player_a_winning)
        player_b_rating = player_b_rating + k * (0 - probability_of_player_b_winning)
    # new rating if B wins
    elif outcome == 0:
        player_a_rating = int(player_a_rating + k * (0 - probability_of_player_a_winning))
        player_b_rating = int(player_b_rating + k * (1 - probability_of_player_b_winning))
    # elif outcome ==


    return player_a_rating, player_b_rating




