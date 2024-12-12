from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import transaction  # 트랜잭션 사용
from django.conf import settings  # MEDIA_ROOT 사용
from django.core.files.storage import default_storage  # 파일 저장
from django.core.files.base import ContentFile  # 파일 컨텐츠 처리
from .models import DetectedObjects
import torch
from PIL import Image
import os

server_state = {
    "detected_objects": []
}

class ObjectDetectionView(APIView):
    def get(self, request):
        try:
            # 데이터베이스에서 모든 객체를 조회
            detected_objects = DetectedObjects.objects.all().values('user_id', 'object_name')

            # 조회된 데이터를 JSON 형식으로 변환
            results = [
                {"user_id": obj["user_id"], "object_name": obj["object_name"]}
                for obj in detected_objects
            ]

            return Response(
                {
                    "status": "success",
                    "message": "Retrieved detected objects successfully.",
                    "allowed_methods": ["POST"],
                    "detected_objects": results,  # 조회된 데이터 포함
                },
                status=status.HTTP_200_OK,
                content_type="application/json"
            )
        except Exception as e:
            return Response(
                {
                    "status": "error",
                    "message": f"Unexpected error while retrieving data: {str(e)}"
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                content_type="application/json"
            )

    def post(self, request):
        # Check if an image is provided
        image_file = request.FILES.get('image')
        if not image_file:
            return Response(
                {
                    "status": "error",
                    "message": "Image file is required."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Save the image to the media folder
            image_path = os.path.join(settings.MEDIA_ROOT, 'uploads', image_file.name)
            path = default_storage.save(image_path, ContentFile(image_file.read()))

            # Load YOLOv5 model
            try:
                model = torch.hub.load('ultralytics/yolov5', 'custom', path='backend/test/yolov5/best.pt')
            except Exception as e:
                return Response(
                    {
                        "status": "error",
                        "message": f"Error loading YOLOv5 model: {str(e)}"
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

            # Process the image
            try:
                image = Image.open(image_path)  # 저장된 이미지로 모델 실행
                results = model(image)

                # Parse results
                detected_objects = results.pandas().xyxy[0].name.tolist()
                user_id = request.data.get('user_id', 1)  # user_id를 요청 데이터에서 가져옴, 기본값 1

                # 트랜잭션으로 데이터 삽입
                with transaction.atomic():
                    for obj_name in detected_objects:
                        DetectedObjects.objects.create(
                            user_id=user_id,
                            object_name=obj_name
                        )

                return Response(
                    {
                        "status": "success",
                        "message": "Image processed and objects saved successfully.",
                        "detected_objects": detected_objects,
                        "saved_image_path": path  # 저장된 경로 반환
                    },
                    status=status.HTTP_200_OK
                )
            except Exception as e:
                return Response(
                    {
                        "status": "error",
                        "message": f"Unexpected error while processing the image: {str(e)}"
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

        except Exception as e:
            return Response(
                {
                    "status": "error",
                    "message": f"Unexpected server error: {str(e)}"
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
