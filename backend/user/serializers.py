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
    password = serializers.CharField(write_only=True)  # 비밀번호 필드 추가

    def validate(self, data):
        personal_id = data.get('personal_id')
        password = data.get('password')

        try:
            user = Users.objects.get(personal_id=personal_id)
        except Users.DoesNotExist:
            raise serializers.ValidationError("가입되지 않은 회원입니다.")

        if not user.check_password(password):
            raise serializers.ValidationError("유효하지 않는 패스워드입니다.")

        data['user'] = user
        return data
