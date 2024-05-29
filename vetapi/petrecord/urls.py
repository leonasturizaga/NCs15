from django.urls import path
from .views import validate_owner
from .views import create_owner
from .views import update_owner  # se puede poner directamente import .views
from .views import validate_owner, ImageUploadView, create_pet

urlpatterns = [
    path('validate_owner/', validate_owner, name='validate_owner'),
    path('create_owner/', create_owner, name='create_owner'),
    path('update_owner/<str:nick>/', update_owner, name='update_owner'),
    path('owner_picture/<str:nick>/', ImageUploadView.as_view(), name='owner_picture'),
    path('owner/<str:nick>/new_pet/', create_pet, name='create_pet')
]
