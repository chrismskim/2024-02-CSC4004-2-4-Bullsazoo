from django.db import models

class AnalyzeResult(models.Model):
    image = models.ImageField(upload_to='uploads/')
    detected_objects = models.JSONField()  # YOLO 분석 결과를 JSON 형식으로 저장
    created_at = models.DateTimeField(auto_now_add=True)  # 생성 시간 자동 기록

    class Meta:
        managed = True
        db_table = 'analyze_result'  # 실제 PostgreSQL 테이블 이름

class DetectedObject(models.Model):
    class_id = models.IntegerField()  # 클래스 ID
    class_name = models.CharField(max_length=100)  # 클래스 이름
    confidence = models.FloatField()  # 신뢰도
    box = models.JSONField()  # 바운딩 박스 좌표 (JSON 형식)
    analyze_result = models.ForeignKey(
        AnalyzeResult,  related_name='related_detected_objects', on_delete=models.CASCADE
    )

    class Meta:
        managed = True
        db_table = 'analyze_detectedobject'  # 실제 PostgreSQL 테이블 이름

