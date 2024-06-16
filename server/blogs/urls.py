from django.urls import path
from .views import BlogApiView






urlpatterns = [
    path("blog/", BlogApiView.as_view(), name="blog_api_view")
]