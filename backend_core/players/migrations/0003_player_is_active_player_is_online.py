# Generated by Django 4.1.7 on 2023-02-21 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0002_alter_player_rank'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='is_active',
            field=models.FloatField(default=False),
        ),
        migrations.AddField(
            model_name='player',
            name='is_online',
            field=models.FloatField(default=False),
        ),
    ]