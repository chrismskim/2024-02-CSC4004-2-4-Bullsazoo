from django.urls import path
from .views import ServiceInfoView

urlpatterns = [
    path('service-info/', ServiceInfoView.as_view(), name='service_info'),
]
