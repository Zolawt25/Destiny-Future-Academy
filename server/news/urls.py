from django.urls import path
from .views import NewsApiView,DetailedNewsApiView






urlpatterns = [
    path("news/", NewsApiView.as_view(), name="news_api_view"),
    path("news/<int:pk>", DetailedNewsApiView.as_view(), name="detailed_news_api_view"),
]