from django.urls import path
from .views import YoloImageAnalysisView

urlpatterns = [
    path('analyze/', YoloImageAnalysisView.as_view(), name='analyze_image'),
]



