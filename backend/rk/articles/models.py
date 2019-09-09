from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title

class User(models.Model):
    firstname = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)


class Phone(models.Model):
    user = models.ForeignKey(User, editable=False, related_name='rel_phone', on_delete=models.CASCADE)
    phone = models.CharField(max_length=50)


class Email(models.Model):
    user = models.ForeignKey(User, editable=False, related_name='rel_mail', on_delete=models.CASCADE)
    email = models.EmailField()