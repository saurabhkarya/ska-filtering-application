from django.shortcuts import render
from .models import Spaceship
from .forms import spaceships_form
from django.http import JsonResponse
from rest_framework import generics
from .serializers import SpaceshipSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from django.utils import timezone


class FilterSpaceshipsView(generics.ListAPIView):
    queryset = Spaceship.objects.all()
    serializer_class = SpaceshipSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        # Colours
        colours = self.request.query_params.getlist('colour')
        if colours:
            queryset = queryset.filter(colour__in=colours)

        # Max Speed
        speed_filter = self.request.query_params.get('speed_filter')
        max_speed = self.request.query_params.get('max_speed')
        if max_speed and speed_filter:
            max_speed = int(max_speed)
            if speed_filter == 'less_than':
                queryset = queryset.filter(max_speed__lt=max_speed)
            elif speed_filter == 'more_than':
                queryset = queryset.filter(max_speed__gt=max_speed)
            elif speed_filter == 'exactly':
                queryset = queryset.filter(max_speed=max_speed)

        # Manufacture Date
        date_filter = self.request.query_params.get('date_filter')
        date = self.request.query_params.get('date')
        if date and date_filter:
            # Parse the date string into a datetime object
            date = timezone.datetime.strptime(date, '%Y-%m-%d').date()
            if date_filter == 'before':
                queryset = queryset.filter(date_of_manufacture__lt=date)
            elif date_filter == 'after':
                queryset = queryset.filter(date_of_manufacture__gt=date)
            elif date_filter == 'exact_date':
                queryset = queryset.filter(date_of_manufacture=date)

        # Pulse Laser
        pulse = self.request.query_params.get('pulse')
        if pulse:
            if pulse == 'yes':
                queryset = queryset.filter(has_pulse_laser=True)
            elif pulse == 'no':
                queryset = queryset.filter(has_pulse_laser=False)

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
