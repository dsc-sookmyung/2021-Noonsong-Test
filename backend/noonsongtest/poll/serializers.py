from rest_framework import serializers 
from .models import Question, Answer, Result, User, Majorchart, Statistic



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
        fields = ('id', 'title', 'image', 'explain')

class UserSerializer(serializers.ModelSerializer):
    answer_list=serializers.JSONField()
    class Meta:
        model = User
        fields = ('id','answer_list','ip', 'result_id') #return 할때 뭐 보낼지 

class MajorchartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Majorchart
        fields = ('id', 's_major', 'result_id')

class StatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistic
        fields = ('id', 'noonsong1_name', 'noonsong1_ratio','noonsong2_name', 'noonsong2_ratio','noonsong3_name', 'noonsong3_ratio',
        'noonsong4_name', 'noonsong4_ratio','noonsong5_name', 'noonsong5_ratio','noonsong6_name', 'noonsong6_ratio',
        'noonsong7_name', 'noonsong7_ratio','noonsong8_name', 'noonsong8_ratio', 'maxnoonsong_title', 'maxnoonsong_image')