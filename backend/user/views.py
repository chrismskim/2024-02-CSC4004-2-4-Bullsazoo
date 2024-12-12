from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Users
from .serializers import UserSignupSerializer, UserLoginSerializer

class UserSignupView(APIView):
    def post(self, request):
        serializer = UserSignupSerializer(data=request.data)
        if serializer.is_valid():
            # 유저 저장
            user = serializer.save()

            # 저장된 데이터 가져오기
            personal_id = serializer.validated_data.get('personal_id')
            password = serializer.validated_data.get('password')

            return Response(
                {
                    '알림': f'회원가입이 완료되었습니다 이름 : {personal_id}, 개인ID : {password}'
                },
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            # 검증된 데이터 가져오기
            personal_id = serializer.validated_data.get('personal_id')
            password = serializer.validated_data.get('password')

            return Response(
                {
                    '알림': f'로그인이 완료되었습니다. 이름 : {personal_id}, 개인ID : {password}'
                },
                status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
