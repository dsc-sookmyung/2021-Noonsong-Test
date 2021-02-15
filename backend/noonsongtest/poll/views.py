from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import QuestionSerializer, AnswerSerializer, ResultSerializer, UserSerializer
from .models import Question, Answer, Result, User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
import json

class QuestionViewSet(viewsets.ModelViewSet):
    queryset=Question.objects.all()
    serializer_class = QuestionSerializer

class AnswerViewSet(viewsets.ModelViewSet):
    queryset=Answer.objects.all()
    serializer_class = AnswerSerializer

class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request):
        answer_list=request.data["answer_list"]
        answer_list = answer_list.replace('[', '')
        answer_list = answer_list.replace(']', '')
        a=answer_list.split(",")
        print(a)
        case = 0
        if (int(a[3]) + int(a[4]) + int(a[5])) < 5:
            case = case + 100
        else:
            case = case + 200

        if (int(a[6]) + int(a[7]) + int(a[8]) + int(a[9]) + int(a[10])) < 8:
            case = case + 10
        else:
            case = case + 20

        if (int(a[11]) + int(a[12]) + int(a[13]) + int(a[14]) + int(a[15])) < 8:
            case = case + 1
        else:
            case = case + 2

        if case == 111:
            resultnum = 1
        elif case == 112:
            resultnum = 2
        elif case == 121:
            resultnum = 3
        elif case == 122:
            resultnum = 4
        elif case == 211:
            resultnum = 5
        elif case == 212:
            resultnum = 6
        elif case == 221:
            resultnum = 7
        elif case == 222:
            resultnum = 8

        print(resultnum)
        
        ip_address = request.META['REMOTE_ADDR']
        print(ip_address)

        user = {
            "answer_list":a,
            "ip":ip_address,
            "result_id":resultnum,  
        }

        
        user_serializer = UserSerializer(data=user)
        
        if user_serializer.is_valid():
            user_serializer.save()
            result = Result.objects.get(id = user['result_id'])
            resultserializer = ResultSerializer(result)
            return Response(resultserializer.data)
            #return Response(user_serializer.data, status=status.HTTP_201_CREATED)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  
   

"""
@api_view(['GET'])
def test(self):
    user = User.objects.all()
    serializer = UserSerializer(user)
    return Response(serializer.data)
"""     
        




    