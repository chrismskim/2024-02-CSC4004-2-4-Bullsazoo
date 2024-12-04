import torch
import os
from django.conf import settings

# YOLOv5 모델 초기화
MODEL_PATH = settings.YOLO_MODEL_PATH  # YOLOv5 모델 경로
model = torch.hub.load('ultralytics/yolov5', 'custom', path=MODEL_PATH, force_reload=True)


def detect_objects(image_path):
    # YOLOv5로 이미지 분석
    results = model(image_path)
    detected_objects = []

    # YOLOv5 결과 처리
    for obj in results.pandas().xyxy[0].to_dict(orient="records"):
        detected_objects.append({
            "class": obj['name'],  # 객체 클래스 이름
            "confidence": obj['confidence'],  # 신뢰도
            "box": [obj['xmin'], obj['ymin'], obj['xmax'], obj['ymax']],  # 바운딩 박스 좌표
        })

    return detected_objects
