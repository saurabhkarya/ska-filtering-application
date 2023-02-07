from django.shortcuts import render
from .models import Spaceship

def ss_list(request):
    ss = Spaceship.objects.all()
    return render(request, 'spaceships.html')
