from rest_framework import serializers
from .models import Users

# 회원가입용 Serializer
class UserSignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # 비밀번호 필드 추가

    class Meta:
        model = Users
        fields = ['personal_id', 'password']  # 회원가입 시 받을 필드

    def create(self, validated_data):
        # 유저 생성 시 set_password로 비밀번호 암호화
        user = Users.objects.create_user(
            personal_id=validated_data['personal_id'],
            password=validated_data['password']
        )
        return user

# 로그인용 Serializer
class UserLoginSerializer(serializers.Serializer):
    personal_id = serializers.CharField(max_length=100)  # personal_id 필드
    password = serializers.CharField(write_only=True)  # 비밀번호 필드

    def validate(self, data):
        personal_id = data.get('personal_id')
        password = data.get('password')

        try:
            user = Users.objects.get(personal_id=personal_id)
        except Users.DoesNotExist:
            raise serializers.ValidationError("가입되지 않은 회원입니다.")

        if not user.check_password(password):
            raise serializers.ValidationError("유효하지 않은 비밀번호입니다.")

        data['user'] = user
        return data
