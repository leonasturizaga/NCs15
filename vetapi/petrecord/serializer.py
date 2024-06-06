from datetime import date, datetime, timedelta
from django.utils import timezone
from rest_framework import serializers
from .models import Owner, Pet, Owner_Pet, Event

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = '__all__'

class PetSerializer(serializers.ModelSerializer):
    edad = serializers.SerializerMethodField() # add Serializer Method Field
    class Meta:
        model = Pet
        fields = '__all__'
    def get_edad(self, obj): # Se agrega una función para mostrar la edad de la mascota.
        if obj.dob:
            today = date.today()
            age_years = today.year - obj.dob.year
            age_months = today.month - obj.dob.month
            if age_months < 0:
                age_years -= 1
                age_months += 12
            return f"{age_years} años y {age_months} meses"
        return "Fecha de nacimiento no proporcionada"




class OwnerPetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner_Pet
        fields = '__all__'
        
class EventSerializer(serializers.ModelSerializer):
    
    pet_id = serializers.IntegerField(source='pet.id', read_only=True) 
    pet_name = serializers.CharField(source='pet.name', read_only=True) # Se agrega acá para evitar que lo pidan después.
    duracion = serializers.SerializerMethodField()
    falta = serializers.SerializerMethodField()
    
    class Meta:
        model = Event
        #fields = '__all__'        before 6/6
        fields = ['id', 'pet_id', 'pet_name', 'title', 'description', 'startdate', 'enddate', 'url', 'duracion', 'falta']

    def get_duracion(self, obj):
        if obj.startdate and obj.enddate:
            delta = obj.enddate - obj.startdate
            total_seconds = int(delta.total_seconds())
            days, seconds = divmod(total_seconds, 86400)
            hours, seconds = divmod(seconds, 3600)
            minutes = seconds // 60
            if days > 0:
                return f"{days} días"
            elif hours > 0:
                return f"{hours} horas"
            else:
                return f"{minutes} minutos"
        return "Duración no disponible"

    def get_falta(self, obj):
        if obj.startdate:
            now = timezone.now()  # Usar timezone.now() para manejar zonas horarias. Ver si da error en otros casos, se probó con 3 casos nada más.
            if obj.enddate and obj.enddate < now:
                return "Evento finalizado"
            elif obj.startdate <= now < obj.enddate:
                return "Evento en curso"
            elif obj.startdate > now:
                delta = obj.startdate - now
                total_seconds = int(delta.total_seconds())
                days, seconds = divmod(total_seconds, 86400)
                hours, seconds = divmod(seconds, 3600)
                minutes = seconds // 60
                if days > 0:
                    return f"{days} días"
                elif hours > 0:
                    return f"{hours} horas"
                else:
                    return f"{minutes} minutos"
        return "El evento ya ha comenzado o no hay fecha de inicio"
