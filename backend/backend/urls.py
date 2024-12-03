from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),  # 관리자 페이지 URL
    path('user/', include('user.urls')),  # user 앱의 URL 포함
    path('analyze/', include('analyze.urls')),
]

# 개발 환경에서 정적 및 미디어 파일 처리
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
