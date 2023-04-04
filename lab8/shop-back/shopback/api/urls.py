from django.urls import path
from . import views

urlpatterns = [
    path('members/', views.members, name='members'),
    path('admin/', my_api_view),
]