from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(max_length=255)
    description = models.TextField(max_length=500)
    count = models.IntegerField
    is_active = models.BooleanField

class Category(models.Model):
    name = models.CharField(max_length=255)
