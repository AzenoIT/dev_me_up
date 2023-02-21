import os
import random


def generate_nick(num_results=1):
    directory_path = os.path.dirname(__file__)
    adjectives, nouns = [], []
    with open(os.path.join(directory_path, 'nick_generator_files', 'adjectives.txt'), 'r') as file_adjective:
        with open(os.path.join(directory_path, 'nick_generator_files', 'nouns.txt'), 'r') as file_noun:
            for line in file_adjective:
                adjectives.append(line.strip())
            for line in file_noun:
                nouns.append(line.strip())

    usernames = []
    for _ in range(num_results):
        adjective = random.choice(adjectives)
        noun = random.choice(nouns).capitalize()
        # num = str(random.randrange(10))
        # usernames.append(adjective + noun + num)
        usernames.append(adjective + noun)

    return usernames

