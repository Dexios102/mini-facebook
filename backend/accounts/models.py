from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(blank=True, null=True, upload_to='avatar/')
    followers = models.ManyToManyField('self', blank=True)
