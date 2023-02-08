from django.urls import path
from .views import filter_spaceships, get_spaceships, FilterSpaceshipsView

urlpatterns = [
    path('spaceships/', filter_spaceships, name='filtered_spaceships'),
    path('get-spaceships/', get_spaceships, name='get_spaceships'),
    path('api/spaceships/filter/',
         FilterSpaceshipsView.as_view(), name='filter_spaceships')
]
