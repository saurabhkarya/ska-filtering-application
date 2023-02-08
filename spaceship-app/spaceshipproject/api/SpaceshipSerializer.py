from rest_framework import serializers
from .models import Spaceship

# Convert the Spaceship model into a JSON response


class SpaceshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spaceship
        fields = '__all__'
