# Generated by Django 4.1.7 on 2023-02-22 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gamesets', '0007_game_reponse_send_game_response_bot_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='reponse_send',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='response_bot_time',
            field=models.DateTimeField(null=True),
        ),
    ]
