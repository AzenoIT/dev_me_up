# Generated by Django 4.1.7 on 2023-02-23 01:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='player',
            old_name='isRankVisible',
            new_name='is_rank_visible',
        ),
        migrations.RenameField(
            model_name='player',
            old_name='isSearchVisible',
            new_name='is_search_visible',
        ),
    ]
