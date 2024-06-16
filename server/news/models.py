from django.db import models

# Create your models here.





class News(models.Model):
    type_of_news = models.CharField(max_length=50)
    img_link = models.CharField(max_length=10050)
    title = models.CharField(max_length=150)
    description = models.TextField()
    
    def __str__(self):
        return self.title
    