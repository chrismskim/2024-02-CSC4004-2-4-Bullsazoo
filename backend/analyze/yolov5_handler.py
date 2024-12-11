import os
import torch
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser
from django.core.files.storage import default_storage
from .models import AnalyzeResult, DetectedObject  # 수정: DetectedObject 모델 가져오기
from .serializers import AnalyzeResultSerializer, DetectionSerializer, ImageUploadSerializer

# YOLOv5 모델 초기화
MODEL_PATH = str(settings.YOLO_MODEL_PATH)  # 모델 경로를 문자열로 변환
CLASS_FILE_PATH = os.path.join(settings.BASE_DIR, 'backend', 'test', 'yolov5', 'classes.txt')  # 클래스 파일 경로

# 클래스 파일 확인 및 로드
if not os.path.exists(CLASS_FILE_PATH):
    raise FileNotFoundError(f"클래스 파일을 찾을 수 없습니다: {CLASS_FILE_PATH}")
with open(CLASS_FILE_PATH, 'r', encoding='utf-8') as f:
    class_names = f.read().strip().split('\n')  # 클래스 이름 리스트

# YOLOv5 모델 경로 확인
if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(f"YOLO 모델 파일을 찾을 수 없습니다: {MODEL_PATH}")

# 모델을 명시적으로 문자열로 변환하여 로드
model = torch.hub.load('ultralytics/yolov5', 'custom', path=MODEL_PATH, force_reload=True)  # force_reload: 모델을 매번 새로 로드


def detect_objects(image_path):
    try:
        # YOLOv5로 이미지 분석
        results = model(image_path)  # 모델이 올바르게 이미지 경로를 받아들일 수 있는지 확인
        detected_objects = []

        # YOLOv5 결과 처리 (xyxy는 [xmin, ymin, xmax, ymax])
        for obj in results.xyxy[0].tolist():
            class_id = int(obj[-1])  # 클래스 ID
            class_name = results.names[class_id]
            detected_objects.append({
                "class_id": class_id,
                "class_name": class_name,
                "confidence": float(obj[4]),  # 신뢰도
                "box": [obj[0], obj[1], obj[2], obj[3]],  # 바운딩 박스 좌표
            })

        return detected_objects
    except Exception as e:
        print(f"Error during object detection: {e}")
        raise e  # 예외를 다시 던져서 처리


class YoloImageAnalysisView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        serializer = ImageUploadSerializer(data=request.data)

        # 파일이 없거나 유효하지 않으면 오류 응답
        if not serializer.is_valid():
            return Response({"error": "No file provided or invalid file"}, status=status.HTTP_400_BAD_REQUEST)

        file = serializer.validated_data['file']  # Serializer에서 파일 추출

        try:
            # 이미지 저장
            image_path = default_storage.save(f'uploads/{file.name}', file)
            absolute_image_path = os.path.join(settings.MEDIA_ROOT, image_path)

            # YOLOv5 모델을 사용하여 물체 인식
            detected_objects = detect_objects(absolute_image_path)

            # `detected_objects`는 리스트 형식이므로, 이를 DetectionSerializer로 직렬화
            detection_serializer = DetectionSerializer(data=detected_objects, many=True)

            # 직렬화가 유효한지 확인
            if not detection_serializer.is_valid():
                return Response({"error": "Error serializing detected objects"}, status=status.HTTP_400_BAD_REQUEST)

            # 응답 데이터 생성 (AnalyzeResult 모델에 저장)
            result = AnalyzeResult.objects.create(image=image_path)

            # Many-to-many 관계에 객체 추가 (set() 사용)
            detected_object_instances = [DetectedObject.objects.create(
                class_id=obj['class_id'],
                class_name=obj['class_name'],
                confidence=obj['confidence'],
                box=obj['box']
            ) for obj in detected_objects]

            # set()을 사용하여 Many-to-Many 관계 설정
            result.detected_objects.set(detected_object_instances)

            response_serializer = AnalyzeResultSerializer(result)

            return Response(response_serializer.data, status=status.HTTP_200_OK)

        except FileNotFoundError as fnf_error:
            return Response({"error": str(fnf_error)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # 다른 예외 처리
            print(f"Error processing request: {e}")
            return Response({"error": f"Internal Server Error: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
