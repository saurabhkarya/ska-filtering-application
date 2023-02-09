from django import forms
from .models import Spaceship


class spaceships_form(forms.Form):
    # defining the colour field
    colour = forms.MultipleChoiceField(
        required=False,
        widget=forms.CheckboxSelectMultiple,
        choices=Spaceship.COLOURS
    )
