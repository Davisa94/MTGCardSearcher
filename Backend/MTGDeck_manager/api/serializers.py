from .models import *
from rest_framework import serializers


class CardSerializer(serializers):
    class Meta:
        model = Card
        fields = (__all__)

class CardToDeckSerializer(serializers):
    class Meta:
        model = CardToDeck
        fields = ('deck_id', 'card_id')

# Serializer for Deck that grabs the nested model references
class DeckSerializer(serializers):
    cards = serializers.PrimaryKeyRelatedField(many=True)
    class Meta:
        model = Deck
        fields = (__all__, 'cards')