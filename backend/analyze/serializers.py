from rest_framework import serializers
from .models import AnalyzeResult, DetectedObject

class DetectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetectedObject
        fields = ['class_id', 'class_name', 'confidence', 'box']

class AnalyzeResultSerializer(serializers.ModelSerializer):
    detected_objects = DetectionSerializer(many=True)  # Many-to-Many 관계 직렬화

    class Meta:
        model = AnalyzeResult
        fields = ['id', 'image', 'detected_objects', 'created_at']

class ImageUploadSerializer(serializers.Serializer):
    file = serializers.FileField()  # 업로드된 파일을 받는 필드


