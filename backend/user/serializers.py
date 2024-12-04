from rest_framework import serializers
from .models import Users

# 회원가입용 Serializer
class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users  # Users 모델을 사용
        fields = ['user_id', 'personal_id']  # 회원가입 시 필요한 필드들 (이름과 개인식별 ID)

    def create(self, validated_data):
        # 개인식별 ID로 사용자를 생성
        user = Users.objects.create(**validated_data)
        return user

# 로그인용 Serializer
class UserLoginSerializer(serializers.Serializer):
    personal_id = serializers.CharField(max_length=100)  # personal_id를 받기 위한 필드
