# Generated by Django 4.1.7 on 2023-02-21 07:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0002_alter_player_rank'),
        ('gamesets', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('result', models.IntegerField()),
                ('date_start', models.DateTimeField()),
                ('date_end', models.DateTimeField()),
                ('game_sets', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s', to='gamesets.gameset')),
                ('player_id_1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='players.player')),
                ('player_id_2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='players.player')),
            ],
        ),
    ]