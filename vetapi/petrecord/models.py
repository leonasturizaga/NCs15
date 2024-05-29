from django.db import models

# Create your models here.
class Owner(models.Model):
    nick = models.CharField(primary_key=True, max_length=30)
    password = models.CharField(max_length=10)
    owner_picture = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.nick