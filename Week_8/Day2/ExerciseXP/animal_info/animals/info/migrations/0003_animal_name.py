# Generated by Django 4.1.2 on 2022-10-30 01:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("info", "0002_famille_alter_animal_family"),
    ]

    operations = [
        migrations.AddField(
            model_name="animal",
            name="name",
            field=models.CharField(max_length=30, null=True),
        ),
    ]
