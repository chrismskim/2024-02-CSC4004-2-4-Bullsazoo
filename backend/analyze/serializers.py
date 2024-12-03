from rest_framework import serializers
from .models import AnalyzeResult

class AnalyzeResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnalyzeResult
        fields = ['id', 'image', 'detected_objects', 'created_at']
