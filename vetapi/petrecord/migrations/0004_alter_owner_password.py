# Generated by Django 5.0.6 on 2024-05-27 10:16

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("petrecord", "0003_owner_owner_picture"),
    ]

    operations = [
        migrations.AlterField(
            model_name="owner",
            name="password",
            field=models.CharField(max_length=10),
        ),
    ]
