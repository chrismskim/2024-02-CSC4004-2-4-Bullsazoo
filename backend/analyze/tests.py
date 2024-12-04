from django.test import TestCase, Client
from django.core.files.uploadedfile import SimpleUploadedFile
import os

class AnalyzeResultTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_image_analysis(self):
        with open('test_image.jpg', 'rb') as img:
            response = self.client.post('/analyze/image-analysis/', {'file': img})
            self.assertEqual(response.status_code, 200)
            self.assertIn('detections', response.json())
