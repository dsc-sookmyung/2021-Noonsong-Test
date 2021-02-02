from rest_framework import serializers 
from .models import Feedback 

class FeedbackSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Feedback # 모델 설정 
        fields = ('id','guest','content') # 필드 설정

