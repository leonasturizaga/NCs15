from django.db import models

# Create your models here.
class Owner(models.Model):
    nick = models.CharField(primary_key=True, max_length=30)
    password = models.CharField(max_length=10)
    owner_picture = models.CharField(max_length=255, blank=True, default="https://res.cloudinary.com/dby1mkv4k/image/upload/v1716740486/zghvwtfpkpsm1dn6srpe.png")

    def __str__(self):
        return self.nick
    
class Pet(models.Model):
    name = models.CharField(max_length=30)
    dob = models.DateField()
    dod = models.DateField(blank=True, null=True, auto_now_add=False)
    category = models.CharField(max_length=20)
    breed = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name + " - " + self.category + " - " + self.breed
    
class Owner_Pet(models.Model):
    owner_nick = models.ForeignKey(Owner, on_delete=models.CASCADE)
    pet_id = models.ForeignKey(Pet, on_delete=models.CASCADE)

    def __str__(self):
        return self.owner_nick + " - " + self.pet_id