from django.contrib import admin
from django.urls import path,re_path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

# 간단한 루트 응답 함수 추가
def home(request):
    return HttpResponse("Welcome to the Django Project!")

# Swagger UI 설정
schema_view = get_schema_view(
    openapi.Info(
        title="Django Project API",
        default_version="v1",
        description="API documentation for user and analyze apps",
        contact=openapi.Contact(email="contact@myapi.local"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),  # 인증 없이 Swagger UI 접근 허용
)

urlpatterns = [
    path('admin/', admin.site.urls),  # 관리자 페이지 URL
    path('user/', include('user.urls')),
    path('analyze/', include('analyze.urls')),
    # user 앱의 URL 포함
    path('', home),  # 루트 URL 처리 추가
    # Swagger UI 문서화 URL 추가
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

# 개발 환경에서 정적 및 미디어 파일 처리
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)