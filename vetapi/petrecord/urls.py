from django.urls import path
from .views import validate_owner
from .views import create_owner
from .views import update_owner  # se puede poner directamente import .views
from .views import OwnerPetsView, OwnerPetsEventsView # Agregados el 6/6 para resolver pedido de FE con vistas por owner de mascotas y eventos.
from .views import validate_owner, ImageUploadView, create_pet, EventListCreate, EventRetrieveUpdateDestroy, PetImageUploadView

urlpatterns = [
    path('validate_owner/', validate_owner, name='validate_owner'),
    path('create_owner/', create_owner, name='create_owner'),
    path('update_owner/<str:nick>/', update_owner, name='update_owner'),
    path('owner_picture/<str:nick>/', ImageUploadView.as_view(), name='owner_picture'),
    path('owner/<str:nick>/new_pet/', create_pet, name='create_pet'),
    path('events/', EventListCreate.as_view(), name='event-list-create'),
    path('events/<int:pk>/', EventRetrieveUpdateDestroy.as_view(), name='event-retrieve-update-destroy'),
    path('owner/<str:owner_nick>/pets/', OwnerPetsView.as_view(), name='owner-pets'), # nueva ruta para ver mascotas x nick
    path('owner/<str:owner_nick>/events/', OwnerPetsEventsView.as_view(), name='owner-pets-events'), # nueva ruta para ver eventos x nick
    path('<str:nick>/<str:pet_name>/pet_picture/', PetImageUploadView.as_view(), name='pet_picture')

]
