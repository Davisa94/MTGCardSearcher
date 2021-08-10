from django.db import models

# Create your models here.

##################################################
# Holds all information needed to display the card
# for the user
# Author: Austin Benitez
##################################################
class Card(models.Model):
    multiverseid = models.IntegerField(unique=True) # Used to fetch the card from the API
    name = models.CharField(max_length=255)

##################################################
# Holds all information needed to display a users 
# curated list of cards and related information
# Author: Austin Benitez
##################################################
class Deck(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)

