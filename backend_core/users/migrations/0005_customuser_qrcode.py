# Generated by Django 4.1.7 on 2023-02-22 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_userfriend'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='qrcode',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
