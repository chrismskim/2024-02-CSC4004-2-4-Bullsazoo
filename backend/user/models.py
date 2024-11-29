from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    username = models.CharField(max_length=150, unique=True)  # 이름 입력
    personal_id = models.CharField(max_length=100, unique=True)  # 개인 식별 ID 입력
    email = models.EmailField(blank=True, null=True)  # 이메일 필드는 사용하지 않을 수도 있음

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['personal_id']

    def __str__(self):
        return self.username
