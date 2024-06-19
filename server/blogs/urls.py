from django.urls import path
from .views import BlogApiView, DetailedBlogApiView






urlpatterns = [
    path("blog/", BlogApiView.as_view(), name="blog_api_view"),
    path("blog/<int:pk>/", DetailedBlogApiView.as_view(), name="detailed_blog_api_view"),
]