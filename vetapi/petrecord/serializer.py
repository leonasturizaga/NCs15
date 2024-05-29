from rest_framework import serializers
from .models import Owner, Pet, Owner_Pet

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = '__all__'

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'


class OwnerPetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner_Pet
        fields = '__all__'