# from django.urls import path, include
# from rest_framework import routers
# from rest_framework.documentation import include_docs_urls
# from .views import OwnerView

# router = routers.DefaultRouter()
# router.register('api/petrecord', OwnerView, 'petrecord')

# # urlpatterns = [
# #     path("api/v1/", include(router.urls)),
# #     path("docs/", include_docs_urls(title="Vet API"))
# # ]

# urlpatterns = router.urls

from django.urls import path
from .views import validate_owner
from .views import create_owner
from .views import update_owner  # se puede poner directamente import .views
from .views import validate_owner, ImageUploadView

urlpatterns = [
    path('validate_owner/', validate_owner, name='validate_owner'),
    path('create_owner/', create_owner, name='create_owner'),
    path('update_owner/<str:nick>/', update_owner, name='update_owner'),
    path('owner_picture/<str:nick>/', ImageUploadView.as_view(), name='owner_picture')
]
