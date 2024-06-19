from django.shortcuts import render
from rest_framework import generics
from .models import News
from .serializers import NewsSerializer
# Create your views here.





class NewsApiView(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    
class DetailedNewsApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer