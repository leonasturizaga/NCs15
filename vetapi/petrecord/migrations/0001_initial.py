# Generated by Django 5.0.6 on 2024-05-21 12:31

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Owner",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nick", models.CharField(max_length=50)),
                ("password", models.CharField(max_length=255)),
            ],
        ),
    ]
