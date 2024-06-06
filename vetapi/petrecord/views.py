from rest_framework import viewsets
from rest_framework import status, generics
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from .serializer import OwnerSerializer, PetSerializer, OwnerPetSerializer, EventSerializer
from .models import Owner, Pet, Owner_Pet, Event
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from django.shortcuts import get_object_or_404
from cloudinary.uploader import upload
from django.utils.decorators import method_decorator
import json
import mimetypes
from rest_framework.views import APIView

# Allowed MIME types and extensions
ALLOWED_IMAGE_MIME_TYPES = [
    'image/jpeg',
    'image/png',
    'image/gif'
]

ALLOWED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png']


# Create your views here.
class OwnerView(viewsets.ModelViewSet):
    serializer_class = OwnerSerializer
    queryset = Owner.objects.all()

class PetView(viewsets.ModelViewSet):
    serializer_class = PetSerializer
    queryset = Pet.objects.all()

class Owner_PetView(viewsets.ModelViewSet):
    serializer_class = OwnerPetSerializer
    queryset = Owner_Pet.objects.all()

class EventListCreate(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

''' Inicio agregado vistas'''

class OwnerPetsView(generics.ListAPIView):
    serializer_class = PetSerializer

    def get_queryset(self):
        owner_nick = self.kwargs['owner_nick']
        pet_ids = Owner_Pet.objects.filter(owner_nick__nick=owner_nick).values_list('pet_id', flat=True)
        return Pet.objects.filter(id__in=pet_ids)

class OwnerPetsEventsView(generics.ListAPIView):
    serializer_class = EventSerializer

    def get_queryset(self):
        owner_nick = self.kwargs['owner_nick']
        pet_ids = Owner_Pet.objects.filter(owner_nick__nick=owner_nick).values_list('pet_id', flat=True)
        return Event.objects.filter(pet_id__in=pet_ids)

'''Fin agregado vistas'''

@csrf_exempt
def validate_owner(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            nick = data.get('nick')
            password = data.get('password')
            if not nick or not password:
                return JsonResponse({'error': 'Nick and password are required'}, status=400)
            try:
                owner = Owner.objects.get(nick=nick)
                if owner.password == password:
                    return JsonResponse({'message': 'Validation successful'}, status=200)
                else:
                    return JsonResponse({'error': 'Invalid password'}, status=401)
            except Owner.DoesNotExist:
                return JsonResponse({'error': 'Owner not found'}, status=404)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid HTTP method'}, status=405)

@api_view(['POST'])
def create_owner(request):
    data = request.data
    if 'nick' not in data:
        return Response({"error": "El campo 'nick' es obligatorio."}, status=status.HTTP_400_BAD_REQUEST)
    if 'password' not in data:
        return Response({"error": "El campo 'password' es obligatorio."}, status=status.HTTP_400_BAD_REQUEST)
    serializer = OwnerSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_owner(request, nick):
    try:
        owner = Owner.objects.get(nick=nick)
    except Owner.DoesNotExist:
        return Response({"error": "Owner not found."}, status=status.HTTP_404_NOT_FOUND)

    data = request.data

    # Modificar los campos si existen en los datos recibidos
    if 'password' in data:
        owner.password = data['password']
    if 'owner_picture' in data:
        owner.owner_picture = data['owner_picture']

    # Validar y guardar los cambios
    serializer = OwnerSerializer(instance=owner, data=data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
@method_decorator(csrf_exempt, name='dispatch')
class ImageUploadView(View):
    def post(self, request, nick):
        file = request.FILES.get('file')
        if not file:
            return JsonResponse({'error': 'No file provided'}, status=400)
        
         # Validate MIME type
        if file.content_type not in ALLOWED_IMAGE_MIME_TYPES:
            return JsonResponse({'error': 'Unsupported file type. Please upload an image.'}, status=400)
        
        # Validate file extension
        ext = mimetypes.guess_extension(file.content_type)
        if ext not in ALLOWED_IMAGE_EXTENSIONS:
            return JsonResponse({'error': 'Unsupported image extension. Please upload a .jpg or a .png image.'}, status=400)

        try:
            upload_result = upload(file)
            owner = get_object_or_404(Owner, pk=nick) 
            owner.owner_picture =  upload_result['url']
            owner.save()
            return JsonResponse({
                'message': 'Upload successful',
                'url': upload_result['url']
            }, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

@api_view(['POST'])
def create_pet(request, nick):
    try:
        owner = get_object_or_404(Owner, pk=nick)
        pet_serializer = PetSerializer(data=request.data)
        if pet_serializer.is_valid():
            pet_serializer.save()
        else:
            return JsonResponse({"error": pet_serializer.errors}, status=400)
        owner_pet_serializer = OwnerPetSerializer(data={
            "owner_nick": owner.nick,
            "pet_id": pet_serializer.data['id']
        })
        if owner_pet_serializer.is_valid():
            owner_pet_serializer.save()
            return JsonResponse({
                'message': 'Pet created successfully',
            }, status=201)
        else:
            return JsonResponse({
                "Owner_Pet Errors": owner_pet_serializer.errors}, status=400)
    except Exception as e:
            return JsonResponse({'error': str(e)}, status=500) 

















@method_decorator(csrf_exempt, name='dispatch')
class PetImageUploadView(APIView):
    def post(self, request, nick, pet_name):
        file = request.FILES.get('file')
        if not file:
            return JsonResponse({'error': 'No file provided'}, status=400)
        
         # Validate MIME type
        if file.content_type not in ALLOWED_IMAGE_MIME_TYPES:
            return JsonResponse({'error': 'Unsupported file type. Please upload an image.'}, status=400)
        
        # Validate file extension
        ext = mimetypes.guess_extension(file.content_type)
        if ext not in ALLOWED_IMAGE_EXTENSIONS:
            return JsonResponse({'error': 'Unsupported image extension. Please upload a .jpg or a .png image.'}, status=400)
        try:
            upload_result = upload(file)
            owner = get_object_or_404(Owner, pk=nick)
            print(owner)
            owner_pet = Owner_Pet.objects.filter(owner_nick=nick)
            owner_pet_serializer = OwnerPetSerializer(owner_pet, many=True)
            user_pets= []
            for owner_pet_elem in owner_pet_serializer.data:
                user_pets.append(owner_pet_elem['pet_id'])
            print(user_pets)
            for pet_element in user_pets:
                pet = Pet.objects.get(pk=pet_element)
                print(pet.name)
                if pet.name == pet_name:
                    print('found!')
                    pet.pet_picture = upload_result['url']
                    pet.save()
                    return JsonResponse({
                   'message': 'Upload successful',
                   'url': upload_result['url']
                      }, status=201)
            return JsonResponse({'error': 'The Pet was not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
