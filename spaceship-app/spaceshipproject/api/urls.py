from django.urls import path
from .views import FilterSpaceshipsView

urlpatterns = [
    path('spaceships/filter/', FilterSpaceshipsView.as_view(),
         name='filter_spaceships')
]
