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
