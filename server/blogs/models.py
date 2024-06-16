from django.db import models

# Create your models here.





class Blog(models.Model):
    title = models.CharField(max_length=250)
    name = models.CharField(max_length=100)
    description = models.TextField()
    img_link = models.CharField(max_length=10050)
    date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    