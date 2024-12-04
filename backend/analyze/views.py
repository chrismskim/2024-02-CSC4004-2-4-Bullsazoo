import os
from django.conf import settings
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ultralytics import YOLO
from django.core.files.storage import default_storage
from .yolov5_handler import detect_objects
from .serializers import AnalyzeResultSerializer


# YOLO 모델 로드
MODEL_PATH = settings.YOLO_MODEL_PATH  # YOLO 모델 경로
model = YOLO(MODEL_PATH)

class YoloImageAnalysisView(APIView):
    def post(self, request, *args, **kwargs):
        file = request.FILES.get('file')
        if not file:
            return Response({"error": "No file provided"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # 이미지 저장
            image_path = default_storage.save(f'uploads/{file.name}', file)
            absolute_image_path = os.path.join(settings.MEDIA_ROOT, image_path)

            # YOLOv5 핸들러 호출
            detected_objects = detect_objects(absolute_image_path)

            # 응답 데이터 생성
            result = AnalyzeResult.objects.create(image=image_path, detected_objects=detected_objects)
            serializer = AnalyzeResultSerializer(result)

            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




