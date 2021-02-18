from django.db import models
from django.db.models import CharField, Model
from django_mysql.models import ListCharField

class Question(models.Model):
    question = models.CharField(max_length=800)
    
    class Meta:
        db_table = 'poll_questions'

class Answer(models.Model):
    answer = models.CharField(max_length=800)
    question = models.ForeignKey('Question', related_name='answers', on_delete=models.CASCADE)

    class Meta:
        db_table = 'poll_answers'

class Result(models.Model):
    title = models.CharField(max_length=1000)
    image = models.CharField(max_length=3000, null=True)
    explain = models.CharField(max_length=3000, null=True)

    class Meta:
        db_table = 'results'


class User(models.Model):
    """
    answer_list = ListCharField(
        default = [],
        base_field=CharField(max_length=10),
        size=6,  
        max_length=(6*16),
    )
    """
    answer_list=models.CharField(max_length=100)
    ip = models.GenericIPAddressField(null=True)
    result_id = models.IntegerField(null = True)
    
    
    class Meta:
        db_table = 'poll_user'
    
class Majorchart(models.Model):
    s_major = models.IntegerField(null=True)
    result_id = models.IntegerField(null=True)

    class Meta:
        db_table = 'majorchart'


class Statistic(models.Model):
    noonsong1_name = models.CharField(max_length=100)
    noonsong1_ratio = models.FloatField()
    noonsong2_name = models.CharField(max_length=100)
    noonsong2_ratio = models.FloatField()
    noonsong3_name = models.CharField(max_length=100)
    noonsong3_ratio = models.FloatField()
    noonsong4_name = models.CharField(max_length=100)
    noonsong4_ratio = models.FloatField()
    noonsong5_name = models.CharField(max_length=100)
    noonsong5_ratio = models.FloatField()
    noonsong6_name = models.CharField(max_length=100)
    noonsong6_ratio = models.FloatField()
    noonsong7_name = models.CharField(max_length=100)
    noonsong7_ratio = models.FloatField()
    noonsong8_name = models.CharField(max_length=100)
    noonsong8_ratio = models.FloatField()
    maxnoonsong_title = models.CharField(max_length=100)
    maxnoonsong_image = models.CharField(max_length=3000, null=True)

    


