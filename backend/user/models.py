from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class UsersManager(BaseUserManager):
    def create_user(self, personal_id, password=None, **extra_fields):
        if not personal_id:
            raise ValueError('The personal_id field must be set')
        user = self.model(personal_id=personal_id, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, personal_id, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(personal_id, password, **extra_fields)

class Users(AbstractBaseUser):
    user_id = models.AutoField(primary_key=True)  # PRIMARY KEY
    personal_id = models.CharField(max_length=100, unique=True)  # UNIQUE CONSTRAINT
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'personal_id'  # 인증에 사용할 필드
    REQUIRED_FIELDS = []  # superuser 생성 시 추가로 요구할 필드

    objects = UsersManager()

    class Meta:
        db_table = 'users'  # PostgreSQL의 테이블 이름
        managed = True