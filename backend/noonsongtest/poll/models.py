from django.db import models

class Question(models.Model):
    question = models.CharField(max_length=1000)
    
    class Meta:
        db_table = 'poll_questions'

class Answer(models.Model):
    answer = models.CharField(max_length=1000)
    question = models.ForeignKey('Question', related_name='answers', on_delete=models.CASCADE)

    class Meta:
        db_table = 'poll_answers'

class Result(models.Model):
    title = models.CharField(max_length=1000)
    image = models.CharField(max_length=3000, null=True)
    explain = models.CharField(max_length=3000, null=True)

    class Meta:
        db_table = 'results'

class Response(models.Model):
    question1 = models.IntegerField()
    question2 = models.IntegerField()
    question3 = models.IntegerField()
    question4 = models.IntegerField()
    question5 = models.IntegerField()
    question6 = models.IntegerField()
    question7 = models.IntegerField()
    question8 = models.IntegerField()
    question9 = models.IntegerField()
    question10 = models.IntegerField()
    question11 = models.IntegerField()
    question12 = models.IntegerField()
    question13 = models.IntegerField()

    class Meta:
        db_table = 'response'



