from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Users
from .serializers import UserSignupSerializer, UserLoginSerializer

class UserSignupView(APIView):
    """
    사용자 회원가입 API
    """
    @swagger_auto_schema(
        operation_description="사용자가 회원가입 요청을 보냈을 때 데이터를 users 테이블에 저장하는 View",
        request_body=UserSignupSerializer,
        responses={201: "User registered successfully", 400: "Invalid input data"}
    )
    def post(self, request):
        serializer = UserSignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    """
    사용자 로그인 API
    """
    @swagger_auto_schema(
        operation_description="사용자가 로그인 요청을 보냈을 때 users 테이블에서 데이터를 확인하는 View",
        request_body=UserLoginSerializer,
        responses={200: "Login successful", 401: "Invalid credentials", 400: "Invalid input data"}
    )
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            personal_id = serializer.validated_data['personal_id']
            try:
                user = Users.objects.get(personal_id=personal_id)
                return Response({'message': 'Login successful', 'user_id': user.user_id}, status=status.HTTP_200_OK)
            except Users.DoesNotExist:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
