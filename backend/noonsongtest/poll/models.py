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

