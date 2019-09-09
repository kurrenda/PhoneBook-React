from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.shortcuts import render, redirect
from django.db.models import Q
from ..models import Article, User,Phone,Email
from .serializers import ArticleSerializer, UserSerializer
from django.db.models import Value as V
from django.db.models.functions import Concat



def is_valid_queryparam(param):
    return param != '' and param is not None



def queryApi(request):


    qs = User.objects.all()
    query = request.GET.get('q')

    if is_valid_queryparam(query):
        qs = qs.annotate(full_name=Concat('firstname', V(' '), 'surname')).filter(
        Q(full_name__icontains=query) |
        Q(firstname__icontains=query) |
        Q(surname__icontains=query) |
        Q(rel_mail__email__icontains=query) |
        Q(rel_phone__phone__icontains=query)).distinct()



    return qs

def query(request):

    user = queryApi(request)
    return render(request, 'index.html', {'users':user})


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ReactFilterView(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        user = queryApi(self.request)
        return user


