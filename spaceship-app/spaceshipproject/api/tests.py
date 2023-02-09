# from rest_framework.test import APITestCase
# from rest_framework import status
# from .views import FilterSpaceshipsView
# from .models import Spaceship


# class FilterSpaceshipsViewTestCase(APITestCase):
#     def setUp(self):
#         # Create 5 spaceships
#         self.spaceship1 = Spaceship.objects.create(
#             colour='red',
#             max_speed=100,
#             date_of_manufacture='2020-01-01',
#             has_pulse_laser=True
#         )
#         self.spaceship2 = Spaceship.objects.create(
#             colour='green',
#             max_speed=200,
#             date_of_manufacture='2021-01-01',
#             has_pulse_laser=True
#         )
#         self.spaceship3 = Spaceship.objects.create(
#             colour='blue',
#             max_speed=300,
#             date_of_manufacture='2019-01-01',
#             has_pulse_laser=False
#         )
#         self.spaceship4 = Spaceship.objects.create(
#             colour='red',
#             max_speed=150,
#             date_of_manufacture='2020-02-01',
#             has_pulse_laser=False
#         )
#         self.spaceship5 = Spaceship.objects.create(
#             colour='green',
#             max_speed=250,
#             date_of_manufacture='2021-02-01',
#             has_pulse_laser=True
#         )

#     def test_filter_spaceships_by_colour(self):
#         response = self.client.get(
#             '/spaceships/',
#             {'colour': ['red']}
#         )
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(len(response.data), 2)
#         self.assertEqual(response.data[0]['name'], 'Spaceship1')
#         self.assertEqual(response.data[1]['name'], 'Spaceship4')

#     def test_filter_spaceships_by_speed(self):
#         response = self.client.get(
#             '/spaceships/',
#             {'speed_filter': 'less_than', 'max_speed': 200}
#         )
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(len(response.data), 2)
#         self.assertEqual(response.data[0]['name'], 'Spaceship1')
#         self.assertEqual(response.data[1]['name'], 'Spaceship4')
