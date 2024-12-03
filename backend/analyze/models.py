from django.db import models

class AnalyzeResult(models.Model):
    image = models.ImageField(upload_to='uploads/')  # 이미지를 저장
    detected_objects = models.JSONField()  # YOLOv5 결과를 JSON 형식으로 저장
    created_at = models.DateTimeField(auto_now_add=True)  # 생성 시간 기록

    def __str__(self):
        return f"Result {self.id} - {self.created_at}"
