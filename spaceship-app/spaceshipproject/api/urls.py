from django.urls import path
from .views import ss_list

urlpatterns = [
    path('spaceships/', ss_list,name='ss_list')
]
