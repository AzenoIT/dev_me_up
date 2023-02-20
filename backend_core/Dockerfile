FROM python:3.11

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv && pipenv install --system

COPY . .

<<<<<<< HEAD
CMD python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000
=======
CMD python3 manage.py makemigrations && python3 manage.py migrate &&python manage.py runserver 0.0.0.0:8000
>>>>>>> ac72480b5fca04df94a83b570403e2b8abcc5834
