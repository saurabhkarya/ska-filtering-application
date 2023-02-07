from django.db import models
from django.core.validators import MinValueValidator
from django.core.validators import MaxValueValidator


# creating a model for a spaceship
class Spaceship(models.Model):
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
    colour = models.CharField(max_length=1, choices=COLOURS)
    max_speed = models.IntegerField(validators=[
        MinValueValidator(50),
        MaxValueValidator(200)
    ])
    date_of_manufacture = models.DateField()
    has_pulse_laser = models.BooleanField()

    # labelling the object
    def __str__(self):
        self.color, 
        self.max_speed, 
        self.manufacture_date, 
        self.pulse_laser
