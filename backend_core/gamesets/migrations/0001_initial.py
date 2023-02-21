# Generated by Django 4.1.7 on 2023-02-20 23:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('technologies', '0002_alter_technologies_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='SourceSet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='GameSet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('difficulty_level', models.FloatField()),
                ('question', models.CharField(max_length=255)),
                ('correct_answer', models.CharField(max_length=255)),
                ('add_answer1', models.CharField(max_length=255)),
                ('add_answer2', models.CharField(max_length=255)),
                ('add_answer3', models.CharField(max_length=255)),
                ('source_set', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='%(class)s', to='gamesets.sourceset')),
                ('technologies', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='%(class)s', to='technologies.technologies')),
            ],
        ),
    ]
