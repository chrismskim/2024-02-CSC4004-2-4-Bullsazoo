from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
from django.db import transaction
from django.conf import settings
import torch
from PIL import Image
import os
from .models import DetectedObjects

class ObjectDetectionView(APIView):
    parser_classes = [JSONParser]

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
                    "detected_objects": results,
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
        # JSON 요청에서 파일 이름 가져오기
        image_name = request.data.get('image_name')
        if not image_name:
            return Response(
                {
                    "status": "error",
                    "message": "Image name is required in the request body."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        # 파일 확장자 확인 (jpg, png 등만 허용)
        if not image_name.lower().endswith(('.jpg', '.jpeg', '.png')):
            return Response(
                {
                    "status": "error",
                    "message": "Unsupported file type. Only jpg, jpeg, png are allowed."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        # 이미지 경로 생성
        image_path = os.path.join(settings.MEDIA_ROOT, 'uploads', image_name)
        if not os.path.exists(image_path):
            return Response(
                {
                    "status": "error",
                    "message": f"The specified image does not exist: {image_path}"
                },
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            # YOLOv5 모델 로드
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

            # 이미지 처리
            try:
                image = Image.open(image_path)
                results = model(image)

                # 인식된 객체 파싱
                detected_objects = results.pandas().xyxy[0].name.tolist()
                user_id = request.data.get('user_id', 1)

                # 데이터베이스에 저장 (트랜잭션 사용)
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
                        "processed_image_path": image_path
                    },
                    status=status.HTTP_200_OK
                )
            except Exception as e:
                return Response(
                    {
                        "status": "error",
                        "message": f"Error while processing the image: {str(e)}"
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
