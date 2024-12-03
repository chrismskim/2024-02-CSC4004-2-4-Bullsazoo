from django.db import models

class Users(models.Model):
    user_id = models.IntegerField(primary_key=True)  # PRIMARY KEY
    personal_id = models.CharField(max_length=100, unique=True)  # UNIQUE CONSTRAINT

    class Meta:
        db_table = 'users'  # PostgreSQL의 테이블 이름
        managed = False  # Django가 테이블을 생성하지 않도록 설정
