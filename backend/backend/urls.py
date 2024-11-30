from django.contrib import admin
from django.urls import path, re_path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(                  #  API 스키마를 만들기 위한 뷰를 생성하는 데 사용,Swagger UI와 연동되어 API 문서를 제공하고 시각적으로 보여줌
    openapi.Info(                               #  API의 기본 정보를 설정
        title="bullsazo API",
        default_version='v1',
        description="bullsazo API 문서",
    ),
    public=True,                                #  API 스키마가 공개되도록 설정
    permission_classes=[permissions.AllowAny],  #  누구나 API 스키마를 조회할 수 있도록 허용
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/landing/', include('landing.urls')),  # 랜딩 페이지 앱 추가
    path('api/user/', include('user.urls')),       # 기존 user 앱
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    re_path(r'^swagger(?P<format>\\.json|\\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]