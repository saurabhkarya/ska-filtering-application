from django.test import TestCase
from .views import ss_list

class YourViewTests(TestCase):
    def test_view_uses_correct_template(self):
        response = self.client.get('/spaceships/')
        self.assertTemplateUsed(response, 'spaceships.html')

