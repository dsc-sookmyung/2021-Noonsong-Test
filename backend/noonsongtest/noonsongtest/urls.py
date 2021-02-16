from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from feedback.views import FeedbackViewSet
from poll.views import QuestionViewSet, AnswerViewSet, ResultViewSet, UserViewSet, MajorchartViewSet
import poll.views

router = routers.DefaultRouter() 
router.register(r'feedbacks',FeedbackViewSet) # prefix = feedbacks , viewset = FeedbackViewSet
router.register(r'questions',QuestionViewSet)
router.register(r'answers',AnswerViewSet)
router.register(r'results',ResultViewSet)
router.register(r'users',UserViewSet)
router.register(r'majorcharts',MajorchartViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    #path('', views.ReactAppView.as_view()), 추가
    #path('test/',poll.views.test)

] #+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
