# Generated by Django 4.1.7 on 2023-02-23 10:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0002_rename_isrankvisible_player_is_rank_visible_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlayerFriend',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('approved', models.BooleanField(default=False)),
                ('relation', models.BooleanField(default=True)),
                ('friend', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='player_friend', to='players.player')),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='player', to='players.player')),
            ],
        ),
    ]
