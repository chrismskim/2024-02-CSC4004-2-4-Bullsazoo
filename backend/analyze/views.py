import os
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from .models import AnalyzeResult
from .yolov5_handler import detect_objects

@csrf_exempt  # 테스트용. 실제 사용 시 CSRF 보안 고려 필요.
def analyze_image(request):
    if request.method == 'POST':
        # 업로드된 이미지 파일 가져오기
        uploaded_file = request.FILES['image']
        image_path = default_storage.save(f'uploads/{uploaded_file.name}', uploaded_file)

        # YOLOv5로 객체 감지
        detections = detect_objects(image_path)

        # 데이터베이스에 저장
        result = AnalyzeResult.objects.create(
            image=image_path,
            detected_objects=detections
        )

        # 프론트엔드로 반환할 데이터
        response_data = {
            'id': result.id,
            'image_url': request.build_absolute_uri(result.image.url),
            'detections': detections,
        }
        return JsonResponse(response_data, status=200)

    return JsonResponse({'error': 'Invalid request'}, status=400)

