from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import UserSerializer
from django.contrib.auth import authenticate

# 회원가입을 위한 API
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 로그인을 위한 API
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        personal_id = request.data.get('personal_id')
        user = authenticate(username=username, password=personal_id)
        if user:
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
