# Generated by Django 5.0.6 on 2024-06-02 16:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petrecord', '0014_alter_pet_pet_picture'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=20)),
                ('description', models.CharField(max_length=255)),
                ('startdate', models.DateTimeField(blank=True)),
                ('enddate', models.DateTimeField(blank=True)),
                ('url', models.CharField(blank=True, max_length=255, null=True)),
                ('pet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='petrecord.pet')),
            ],
        ),
    ]