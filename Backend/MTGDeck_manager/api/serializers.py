from .models import *
from rest_framework import serializers


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('id')

class CardToDeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardToDeck
        fields = ('deck_id', 'card_id')

# Serializer for Deck that grabs the nested model references
class DeckSerializer(serializers.ModelSerializer):
    cards = serializers.PrimaryKeyRelatedField(queryset=CardToDeck.objects.all(), many=True)
    class Meta:
        model = Deck
        fields = ('__all__', 'cards')