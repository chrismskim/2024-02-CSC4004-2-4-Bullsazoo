from django.db import models

class DetectedObjects(models.Model):
    user_id = models.IntegerField()
    object_name = models.CharField(max_length=100)

    class Meta:
        db_table = 'analyze_detectedobjects'  # PostgreSQL의 테이블 이름
        managed = False                # Django가 이 테이블을 관리하지 않음
        unique_together = ('user_id', 'object_name')
