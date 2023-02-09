from django.db import models
from django.core.validators import MinValueValidator
from django.core.validators import MaxValueValidator


# creating a model for a spaceship
class Spaceship(models.Model):

    class SpaceshipObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    COLOURS = [
        # colour choices of a rainbow
        ('Red', 'Red'),
        ('Orange', 'Orange'),
        ('Yellow', 'Yellow'),
        ('Green', 'Green'),
        ('Blue', 'Blue'),
        ('Indigo', 'Indigo'),
        ('Violet', 'Violet')
    ]

    # defining the fields
    name = models.CharField(max_length=50, default="Spaceship")
    colour = models.CharField(max_length=50, choices=COLOURS)
    max_speed = models.IntegerField(validators=[
        MinValueValidator(50),
        MaxValueValidator(200)
    ])
    date_of_manufacture = models.DateField()
    has_pulse_laser = models.BooleanField()
    objects = models.Manager()

    # labelling the object

    def __str__(self):
        return f"{self.name}, {self.colour}, {self.max_speed}, {self.date_of_manufacture}, {self.has_pulse_laser}"
