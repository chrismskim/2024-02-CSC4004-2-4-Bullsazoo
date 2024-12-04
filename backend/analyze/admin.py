from django.contrib import admin
from .models import AnalyzeResult


@admin.register(AnalyzeResult)
class AnalyzeResultAdmin(admin.ModelAdmin):
    # 관리자 페이지 목록에 표시할 필드
    list_display = ('id', 'image', 'created_at')

    # 읽기 전용 필드 (생성 시간)
    readonly_fields = ('created_at',)

    # 검색 가능한 필드
    search_fields = ('id',)

    # 날짜 필터 추가
    list_filter = ('created_at',)
