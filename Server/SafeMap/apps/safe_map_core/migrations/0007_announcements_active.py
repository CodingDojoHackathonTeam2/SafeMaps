# Generated by Django 3.0 on 2022-07-25 01:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('safe_map_core', '0006_auto_20220627_2216'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcements',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]