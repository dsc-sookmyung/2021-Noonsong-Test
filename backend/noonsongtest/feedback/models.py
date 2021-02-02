from django.db import models

class Feedback(models.Model):
    guest = models.CharField(max_length=10) #이름
    content = models.TextField()

    def __str__(self):
        return self.content

