from rest_framework import serializers
from .models import AnalyzeResult

class DetectionSerializer(serializers.Serializer):
    class_id = serializers.IntegerField()
    confidence = serializers.FloatField()
    box = serializers.ListField(child=serializers.FloatField())

class AnalyzeResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnalyzeResult
        fields = ['id', 'image', 'detected_objects', 'created_at']




