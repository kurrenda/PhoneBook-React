from django.urls import path

from .views import ArticleListView, ArticleDetailView, ReactFilterView


urlpatterns = [
    path('art/', ArticleListView.as_view()),
    path('art/<pk>', ArticleDetailView.as_view()),
    path('filter/', ReactFilterView.as_view(), name='react'),
]