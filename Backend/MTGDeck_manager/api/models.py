from django.db import models

# Create your models here.
class Card(models.Model):
    multiverseid = models.IntegerField(unique=True) # Used to fetch the card from the API
    name = models.CharField(max_length=255)

class Deck(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)