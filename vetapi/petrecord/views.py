from django.shortcuts import render
from rest_framework import viewsets
from .serializer import OwnerSerializer
from .models import Owner
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Owner
import json

# Create your views here.
class OwnerView(viewsets.ModelViewSet):
    serializer_class = OwnerSerializer
    queryset = Owner.objects.all()

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