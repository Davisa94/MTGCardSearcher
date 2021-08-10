from django.db import models

# Create your models here.

##################################################
# Holds all information needed to display the card
# for the user
# Author: Austin Benitez
##################################################
class Card(models.Model):
    multiverseid = models.IntegerField(unique=True) # Used to fetch the card from the API
    deck_id = models.ForeignKey("Deck", related_name="card", on_delete=models.CASCADE)

##################################################
# An info table containing everything about the
# Card given from the API used as a cache
# Author: Austin Benitez
##################################################
class CardInfo(models.Model):
    id = models.AutoField(primary_key=True)
    multiverseid = models.IntegerField(unique=True)
    name = models.CharField(max_length=145)

##################################################
# Holds all information needed to display a users 
# curated list of cards and related information
# Author: Austin Benitez
##################################################
class Deck(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=145)

