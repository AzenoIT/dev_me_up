import numpy as np

"""
    generates two-element tuple (response, time)
    response - 1 if bot provides correct answer, 0 if wrong answer
    time in secs for bot response
"""


def bot_single_response(quiz_id):

    probability_ratio = 2800/3200
    result = np.random.choice([0, 1], p=[1-probability_ratio, probability_ratio])

    time_to_response_in_secs = np.random.choice(np.arange(5, 10))

    return result, time_to_response_in_secs


