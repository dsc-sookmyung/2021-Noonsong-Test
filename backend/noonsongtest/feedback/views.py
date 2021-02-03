#from django.shortcuts import render

from rest_framework import viewsets 
from .serializers import FeedbackSerializer 
from .models import Feedback 

class FeedbackViewSet(viewsets.ModelViewSet): 
    queryset = Feedback.objects.all() 
    serializer_class = FeedbackSerializer

