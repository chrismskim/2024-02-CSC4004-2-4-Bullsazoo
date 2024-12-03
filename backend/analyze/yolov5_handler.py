import torch

# YOLOv5 모델 로드
MODEL_PATH = 'path/to/yolov5_model.pt'  # YOLOv5 모델 파일 경로
model = torch.hub.load('ultralytics/yolov5', 'custom', path=MODEL_PATH)

def detect_objects(image_path):
    results = model(image_path)
    predictions = results.pandas().xyxy[0].to_dict(orient="records")  # JSON 형식으로 반환
    return predictions
