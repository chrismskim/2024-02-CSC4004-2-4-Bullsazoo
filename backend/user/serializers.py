from rest_framework import serializers
from .models import Users

# 회원가입용 Serializer
class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users  # Users 모델과 연결
        fields = ['user_id', 'personal_id']  # 회원가입 시 필요한 필드

# 로그인용 Serializer
class UserLoginSerializer(serializers.Serializer):
    personal_id = serializers.CharField(max_length=100)  # personal_id를 받기 위한 필드
