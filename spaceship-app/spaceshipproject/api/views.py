from django.shortcuts import render
from .models import Spaceship
from .forms import spaceships_form
from django.http import JsonResponse
from rest_framework import generics
from . import SpaceshipSerializer

# Get the spaceships into a JSON response so that front-end can consume it


def get_spaceships(request):
    spaceships = Spaceship.objects.all()
    spaceships_data = []
    for spaceship in spaceships:
        spaceship_data = {
            'id': spaceship.id,
            'colour': spaceship.colour,
            'max_speed': spaceship.max_speed,
            'date_of_manufacture': spaceship.date_of_manufacture,
            'has_pulse_laser': spaceship.has_pulse_laser,
        }
        spaceships_data.append(spaceship)
    return JsonResponse({'spaceships': spaceships_data})


def spaceships_list(request):
    spaceships = Spaceship.objects.all()
    return render(request, 'spaceships.html')


def filter_spaceships(request):
    form = spaceships_form(request.GET or None)
    spaceships = []
    if form.is_valid():
        # procespaceships the form info and filter the spaceships
        colour = form.cleaned_data.get('colour')
        spaceships = Spaceship.objects.all()
        if colour:
            spaceships = spaceships.filter(colour__in=colour)
    return render(request, 'spaceships.html', {'form': form, 'spaceships': spaceships})


class FilterSpaceshipsView(generics.ListAPIView):
    queryset = Spaceship.objects.all()
    serializer_class = SpaceshipSerializer

    def get_queryset(self):
        color = self.request.data.get('color')
        queryset = self.queryset
        if color:
            queryset = queryset.filter(color=color)
        return queryset
