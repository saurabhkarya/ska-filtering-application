from django.db import models

class Spaceship(models.Model):
    COLOR_CHOICES = [
        ('red', 'Red'),
        ('blue', 'Blue'),
        ('green', 'Green'),
        # Add more color choices as needed
    ]
    color = models.CharField(max_length=20, choices=COLOR_CHOICES)
    max_speed = models.IntegerField(validators=[
        MinValueValidator(50),
        MaxValueValidator(200)
    ])
    date_of_manufacture = models.DateField()
    has_pulse_laser = models.BooleanField()

    def __str__(self):
        return self.color