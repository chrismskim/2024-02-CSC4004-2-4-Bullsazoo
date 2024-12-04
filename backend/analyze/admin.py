from django.contrib import admin
from .models import AnalyzeResult

@admin.register(AnalyzeResult)
class AnalyzeResultAdmin(admin.ModelAdmin):
    list_display = ['id', 'image', 'created_at']
    search_fields = ['image']
