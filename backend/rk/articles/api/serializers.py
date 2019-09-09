from rest_framework import serializers

from ..models import Article, User, Phone, Email

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id','title','content')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model =  User
        fields = ('__all__')