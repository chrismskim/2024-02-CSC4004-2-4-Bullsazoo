import torch
import pathlib
import os
from django.conf import settings


temp = pathlib.PosixPath
pathlib.PosixPath = pathlib.WindowsPath

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
model = torch.hub.load('ultralytics/yolov5', 'custom', path=MODEL_PATH, force_reload=True)

def detect_objects(image_path):
    # YOLOv5로 이미지 분석
    results = model(image_path)
    detected_objects = []

    # YOLOv5 결과 처리
    for obj in results.xyxy[0].tolist():
        class_id = int(obj[-1])  # 클래스 ID
        detected_objects.append({
            "class": class_names[class_id] if class_id < len(class_names) else f"Unknown ({class_id})",  # 클래스 이름
            "confidence": float(obj[4]),  # 신뢰도
            "box": [obj[0], obj[1], obj[2], obj[3]],  # 바운딩 박스 좌표
        })

    return detected_objects
