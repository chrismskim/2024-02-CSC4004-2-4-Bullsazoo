from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

# 프로젝트 전역 Swagger 설정
schema_view = get_schema_view(
    openapi.Info(
        title="Backend API",
        default_version='v1',
        description="API documentation for all apps in the backend",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

# 간단한 루트 응답 함수 추가
def home(request):
    return HttpResponse("Welcome to the Django Project!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls')),  # user 앱 경로
    path('analyze/', include('analyze.urls')),  # analyze 앱 경로
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

# 개발 환경에서 정적 및 미디어 파일 처리
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
