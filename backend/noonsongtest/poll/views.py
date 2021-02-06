from django.shortcuts import render
from rest_framework import viewsets 
from .serializers import QuestionSerializer, AnswerSerializer, ResultSerializer, ResponseSerializer
from .models import Question, Answer, Result, Response

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

class ResponseViewSet(viewsets.ModelViewSet):
    queryset = Response.objects.all()
    serializer_class = ResponseSerializer