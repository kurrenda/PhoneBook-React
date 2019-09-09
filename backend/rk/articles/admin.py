from django.contrib import admin

from .models import Article, User, Email, Phone

admin.site.register(Article)
admin.site.register(User)
admin.site.register(Email)
admin.site.register(Phone)