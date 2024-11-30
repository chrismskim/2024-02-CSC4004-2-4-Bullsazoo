from rest_framework import serializers
from .models import ServiceInfo

class ServiceInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceInfo
        fields = ['title', 'description', 'audio_description']
