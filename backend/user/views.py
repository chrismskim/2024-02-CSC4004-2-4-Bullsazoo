from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Users
from .serializers import UserSignupSerializer, UserLoginSerializer

# 회원가입 API View
class UserSignupView(APIView):
    """
    사용자가 회원가입 요청을 보냈을 때 데이터를 users 테이블에 저장하는 View
    """

    @swagger_auto_schema(
        operation_description="Register a new user.",
        request_body=UserSignupSerializer,
        responses={
            201: "User registered successfully",
            400: "Invalid input data",
        }
    )

    def post(self, request):
        serializer = UserSignupSerializer(data=request.data)  # 클라이언트로부터 데이터 수신
        if serializer.is_valid():  # 데이터 유효성 검증
            serializer.save()  # 데이터 저장
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # 유효하지 않을 경우 오류 반환


# 로그인 API View
class UserLoginView(APIView):
    """
    사용자가 로그인 요청을 보냈을 때 users 테이블에서 데이터를 확인하고 응답하는 View
    """

    @swagger_auto_schema(
        operation_description="Log in a user.",
        request_body=UserLoginSerializer,
        responses={
            200: openapi.Response(
                "Login successful",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        'message': openapi.Schema(type=openapi.TYPE_STRING),
                        'user_id': openapi.Schema(type=openapi.TYPE_INTEGER),
                    }
                )
            ),
            401: "Invalid credentials",
            400: "Invalid input data",
        }
    )

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)  # 클라이언트로부터 personal_id 받음
        if serializer.is_valid():  # 데이터 유효성 검증
            personal_id = serializer.validated_data['personal_id']  # personal_id 추출
            try:
                user = Users.objects.get(personal_id=personal_id)  # 데이터베이스에서 사용자 조회
                return Response({'message': 'Login successful', 'user_id': user.user_id}, status=status.HTTP_200_OK)
            except Users.DoesNotExist:  # 사용자가 없을 경우
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # 유효하지 않을 경우 오류 반환
