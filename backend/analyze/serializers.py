from rest_framework import serializers
from .models import AnalyzeResult

class DetectionSerializer(serializers.Serializer):
    class_id = serializers.IntegerField()  # 클래스 ID
    class_name = serializers.CharField()  # 클래스 이름
    confidence = serializers.FloatField()  # 신뢰도
    box = serializers.ListField(child=serializers.FloatField())  # 바운딩 박스 좌표 (xmin, ymin, xmax, ymax)

class AnalyzeResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnalyzeResult
        fields = ['id', 'image', 'detected_objects', 'created_at']

class ImageUploadSerializer(serializers.Serializer):
    file = serializers.FileField()  # 업로드된 파일을 받는 필드



