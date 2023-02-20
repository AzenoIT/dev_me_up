## Run

1. Clone the project

```bash
  git clone git@github.com:AzenoIT/dev_me_up.git
```

2. Go to the project directory

```bash
  cd dev_me_up
```

3. Create your own .env file based on envs directory.

```bash
  cp envs/.env_django-default .env_django
  cp envs/.env_db-default .env_db
```

4. Start the server

```bash
  docker compose up
```