from django.shortcuts import render
from .models import Spaceship
from .forms import spaceships_form
from django.http import JsonResponse
from rest_framework import generics
from .serializers import SpaceshipSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response


# Get the list of Spaceships (if I was running the HTML through Django)
# def spaceships_list(request):
#     spaceships = Spaceship.objects.all()
#     return render(request, 'spaceships.html')


# def filter_spaceships(request):
#     form = spaceships_form(request.GET or None)
#     spaceships = []
#     if form.is_valid():
#         # process spaceships the form info and filter the spaceships
#         colour = form.cleaned_data.get('colour')
#         spaceships = Spaceship.objects.all()
#         if colour:
#             spaceships = spaceships.filter(colour__in=colour)
#     return render(request, 'spaceships.html', {'form': form, 'spaceships': spaceships})

class FilterSpaceshipsView(generics.ListAPIView):
    queryset = Spaceship.objects.all()
    serializer_class = SpaceshipSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        colours = self.request.query_params.getlist('colour')
        if colours:
            queryset = queryset.filter(colour__in=colours)
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
