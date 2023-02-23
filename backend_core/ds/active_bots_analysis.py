def get_all_logged_in_users(set_of_players):
    users_id = []
    for player in set_of_players:
        if player['is_online'] is True:
            users_id.append(player['uuid'])
    return users_id


def get_online_real_users(id_list, set_of_players):
    real_users_id = []
    for player_id in id_list:
        for player in set_of_players:
            if player_id == player['uuid'] and player['is_bot'] is False:
                real_users_id.append(player['uuid'])
    return real_users_id


def calculate_ultimate_bot_number(user_list):
    base_length = 100
    length_diff = len(user_list) - base_length
    if length_diff == 0:
        return base_length
    elif length_diff < 0:
        return base_length + abs(length_diff)
    else:
        return base_length - length_diff


def activate_deactivate_bot(calculated_active_bot_number, set_of_players):
    for player in set_of_players:
        if len([player['is_bot'] for player in set_of_players if
                player['is_bot'] is True and player['is_online'] is True]) < calculated_active_bot_number:
            if player['is_bot'] is True and player['is_online'] is False:
                player['is_online'] = True
        elif len([player['is_bot'] for player in set_of_players if
                  player['is_bot'] is True and player['is_online'] is True]) > calculated_active_bot_number:
            if player['is_bot'] is True and player['is_online'] is True:
                player['is_online'] = False
        else:
            return set_of_players
    return set_of_players


def run(set_of_players):
    id_list = get_all_logged_in_users(set_of_players)
    real_users_id = get_online_real_users(id_list, set_of_players)
    calculated_ultimate_active_bot_number = calculate_ultimate_bot_number(real_users_id)
    return activate_deactivate_bot(calculated_ultimate_active_bot_number, set_of_players)

