from django.db import models

class AnalyzeResult(models.Model):
    image = models.CharField(max_length=100)  # image 필드는 VARCHAR(100)와 매핑
    detected_objects = models.JSONField()  # YOLO 분석 결과를 JSON 형식으로 저장
    created_at = models.DateTimeField(auto_now_add=True)  # 생성 시간 자동 기록

    class Meta:
        managed = False  # Django가 테이블을 관리하지 않도록 설정
        db_table = 'analyze_analyzeresult'  # 실제 PostgreSQL 테이블 이름
