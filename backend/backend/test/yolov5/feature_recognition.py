import torch
import cv2
import pathlib
import os

temp = pathlib.PosixPath
pathlib.PosixPath = pathlib.WindowsPath

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 1. 모델 로드 (force_reload=True로 캐시 새로 고침)
model = torch.hub.load(
    'ultralytics/yolov5',  # YOLOv5 저장소
    'custom',              # 사용자 정의 모델
    path=str(BASE_DIR) + '\\yolov5\\runs\\train\\exp7\\weights\\last.pt',  # 경로를 문자열로 전달
    force_reload=True      # 강제 재로드
)

# 2. 웹캠 열기
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("웹캠을 열 수 없습니다.")
    exit(1)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        print("프레임을 읽을 수 없습니다.")
        break

    # 3. YOLOv5 객체 탐지
    results = model(frame)

    labels = results.pandas().xyxy[0]["name"].tolist()  # 탐지된 객체 라벨
    # 4. 탐지 결과 그리기 (results.render()로 프레임에 객체 탐지 결과 그리기)
    annotated_frame = results.render()[0]  # 첫 번째 이미지만 사용
    # 5. 객체 탐지 결과를 화면에 표시
    cv2.imshow("Lee Geon Min", annotated_frame)

    # 'q'를 누르면 종료
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
