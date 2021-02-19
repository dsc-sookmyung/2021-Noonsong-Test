from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import QuestionSerializer, AnswerSerializer, ResultSerializer, UserSerializer, MajorchartSerializer, StatisticSerializer
from .models import Question, Answer, Result, User, Majorchart, Statistic
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
        a=answer_list.split(",")

        
 
        case = 0
        if (int(a[2]) + int(a[3]) + int(a[4])) < 5:
            case = case + 100
        else:
            case = case + 200

        if (int(a[5]) + int(a[6]) + int(a[7]) + int(a[8]) + int(a[9])) < 8:
            case = case + 10
        else:
            case = case + 20

        if int(a[14]) == 3:
            ans15 = 1
        elif int(a[14]) != 3:
            ans15 = 2

        if (int(a[10]) + int(a[11]) + int(a[12]) + int(a[13]) + ans15) < 8:
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

        statistics = {
            "s_major":int(a[1]),
            "result_id":resultnum,
        }
        
        user_serializer = UserSerializer(data=user)
        majorchart_serializer = MajorchartSerializer(data=statistics)

        if user_serializer.is_valid() and majorchart_serializer.is_valid():
            user_serializer.save()
            majorchart_serializer.save()
            result = Result.objects.get(id = user['result_id'])
            resultserializer = ResultSerializer(result)
            return Response(resultserializer.data)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        

class MajorchartViewSet(viewsets.ModelViewSet):
    queryset=Majorchart.objects.all()
    serializer_class = MajorchartSerializer

    def create(self, request):
        s_major = request.data['s_major']
        print(int(s_major))
        #14까지가 단과대학, 15는 전체

        count = 0
        num1, num2, num3, num4, num5, num6, num7, num8 = 0,0,0,0,0,0,0,0
        ratio1, ratio2, ratio3, ratio4, ratio5, ratio6, ratio7, ratio8 = 0,0,0,0,0,0,0,0
        #전체 통계 보여달라고 했을때
        if int(s_major) == 15:
            total = Majorchart.objects.all()

            for num in total:
                count += 1
               
                if num.result_id == 1:
                    num1 += 1
                if num.result_id == 2:
                    num2 += 1
                if num.result_id == 3:
                    num3 += 1
                if num.result_id == 4:
                    num4 += 1
                if num.result_id == 5:
                    num5 += 1
                if num.result_id == 6:
                    num6 += 1
                if num.result_id == 7:
                    num7 += 1
                if num.result_id == 8:
                    num8 += 1

            ratio1 = round(num1/count,2)
            ratio2 = round(num2/count,2)
            ratio3 = round(num3/count,2)
            ratio4 = round(num4/count,2)
            ratio5 = round(num5/count,2)
            ratio6 = round(num6/count,2)
            ratio7 = round(num7/count,2)
            ratio8 = round(num8/count,2)

            numlist = [num1, num2, num3, num4, num5, num6, num7, num8]
            maxnum = max(numlist) 
            m = numlist.index(maxnum) + 1
            

            statistic_result = {
                "noonsong1_name":Result.objects.get(id=1).title,
                "noonsong1_ratio":ratio1,
                "noonsong2_name":Result.objects.get(id=2).title,
                "noonsong2_ratio":ratio2,
                "noonsong3_name":Result.objects.get(id=3).title,
                "noonsong3_ratio":ratio3,
                "noonsong4_name":Result.objects.get(id=4).title,
                "noonsong4_ratio":ratio4,
                "noonsong5_name":Result.objects.get(id=5).title,
                "noonsong5_ratio":ratio5,
                "noonsong6_name":Result.objects.get(id=6).title,
                "noonsong6_ratio":ratio6,
                "noonsong7_name":Result.objects.get(id=7).title,
                "noonsong7_ratio":ratio7,
                "noonsong8_name":Result.objects.get(id=8).title,
                "noonsong8_ratio":ratio8,
                "maxnoonsong_title":Result.objects.get(id=m).title,
                "maxnoonsong_image":Result.objects.get(id=m).image,
            }

            statistic_serializer = StatisticSerializer(data=statistic_result)

            if statistic_serializer.is_valid():
                statistic_serializer.save()
                return Response(statistic_serializer.data)
            else:
                return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


        #단과대별로 통계 보여달라고 했을때
        else :
            selected = Majorchart.objects.filter(s_major=int(s_major))
            
            for num in selected:
                count += 1
                
                if num.result_id == 1:
                    num1 += 1
                if num.result_id == 2:
                    num2 += 1
                if num.result_id == 3:
                    num3 += 1
                if num.result_id == 4:
                    num4 += 1
                if num.result_id == 5:
                    num5 += 1
                if num.result_id == 6:
                    num6 += 1
                if num.result_id == 7:
                    num7 += 1
                if num.result_id == 8:
                    num8 += 1

            ratio1 = round(num1/count,2)
            ratio2 = round(num2/count,2)
            ratio3 = round(num3/count,2)
            ratio4 = round(num4/count,2)
            ratio5 = round(num5/count,2)
            ratio6 = round(num6/count,2)
            ratio7 = round(num7/count,2)
            ratio8 = round(num8/count,2)

            numlist = [num1, num2, num3, num4, num5, num6, num7, num8]
            maxnum = max(numlist) 
            m = numlist.index(maxnum) + 1

            statistic_result = {
                "noonsong1_name":Result.objects.get(id=1).title,
                "noonsong1_ratio":ratio1,
                "noonsong2_name":Result.objects.get(id=2).title,
                "noonsong2_ratio":ratio2,
                "noonsong3_name":Result.objects.get(id=3).title,
                "noonsong3_ratio":ratio3,
                "noonsong4_name":Result.objects.get(id=4).title,
                "noonsong4_ratio":ratio4,
                "noonsong5_name":Result.objects.get(id=5).title,
                "noonsong5_ratio":ratio5,
                "noonsong6_name":Result.objects.get(id=6).title,
                "noonsong6_ratio":ratio6,
                "noonsong7_name":Result.objects.get(id=7).title,
                "noonsong7_ratio":ratio7,
                "noonsong8_name":Result.objects.get(id=8).title,
                "noonsong8_ratio":ratio8,
                "maxnoonsong_title":Result.objects.get(id=m).title,
                "maxnoonsong_image":Result.objects.get(id=m).image,
            }

            statistic_serializer = StatisticSerializer(data=statistic_result)

            if statistic_serializer.is_valid():
                statistic_serializer.save()
                return Response(statistic_serializer.data)
            else:
                return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
            


      
  