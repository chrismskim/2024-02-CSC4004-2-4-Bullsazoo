from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Users
from .serializers import UserSignupSerializer, UserLoginSerializer

class UserSignupView(APIView):

    def post(self, request):
        serializer = UserSignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):

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
