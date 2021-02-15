from django.shortcuts import render
from rest_framework import viewsets
from .serializers import QuestionSerializer, AnswerSerializer, ResultSerializer, UserSerializer
from .models import Question, Answer, Result, User
from rest_framework.response import Response
from rest_framework.decorators import api_view

class QuestionViewSet(viewsets.ModelViewSet):
    queryset=Question.objects.all()
    serializer_class = QuestionSerializer

class AnswerViewSet(viewsets.ModelViewSet):
    queryset=Answer.objects.all()
    serializer_class = AnswerSerializer

#get요청만 필요한데 일단 뭉뜽그려서 되나 확인위해 viewset으로 처리 

class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
   


"""
@api_view(['GET'])
def test(self):
    user = User.objects.all()
    serializer = UserSerializer(user)
    return Response(serializer.data)
"""     
        




    