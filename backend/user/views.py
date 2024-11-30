from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken
from .models import User
from .serializers import UserSerializer
from .utils import text_to_speech, check_google_credentials

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            audio_path = text_to_speech("회원가입이 완료되었습니다.")
            return Response({
                "message": "회원가입이 완료되었습니다.",
                "audio_url": audio_path
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        # Google Credentials 확인
        try:
            check_google_credentials()
        except EnvironmentError as e:
            return Response({"error": str(e)}, status=500)

        username = request.data.get('username')
        personal_id = request.data.get('personal_id')

        # 사용자 인증 로직
        user = authenticate(username=username, password=personal_id)
        if user:
            refresh = RefreshToken.for_user(user)
            audio_path = text_to_speech("로그인에 성공했습니다.")
            return Response({
                "message": "로그인 성공",
                "token": str(refresh.access_token),
                "audio_url": audio_path
            }, status=status.HTTP_200_OK)
        audio_path = text_to_speech("로그인 정보가 올바르지 않습니다.")
        return Response({
            "message": "로그인 실패",
            "audio_url": audio_path
        }, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    def post(self, request):
        tokens = OutstandingToken.objects.filter(user=request.user)
        for token in tokens:
            BlacklistedToken.objects.create(token=token)
        audio_path = text_to_speech("로그아웃 되었습니다.")
        return Response({
            "message": "로그아웃 성공",
            "audio_url": audio_path
        }, status=status.HTTP_200_OK)
