from rest_framework import serializers 
from .models import Question, Answer, Result, Response



class AnswerSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Answer # 모델 설정 
        fields = ('id','question_id', 'answer') # 필드 설정

class QuestionSerializer(serializers.ModelSerializer): 
    answers = AnswerSerializer(many=True, read_only=True) #Answer 테이블 항목이 여러개라 many = True

    class Meta: 
        model = Question # 모델 설정 
        fields = ('id','question', 'answers') # 필드 설정

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ('id', 'title', 'explain')

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = '__all__'