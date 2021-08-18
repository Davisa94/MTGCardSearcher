from django.shortcuts import render
from .serializers import *
from rest_framework import generics, status
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView

# General views go here.
def sanity_check(req):
    return HttpResponse("<h2>Sanity Check</h2>")

# API views go here
def main(req):
    pass
class CardView(generics.CreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class NickNameCardView(APIView):
    serializer_class = NickNameCardSerializer
    valid = True
    def post(self, request, format=None):
        # Check for active session
        # if not self.request.session.exists(self.request.session.session_key):
        #     # create a new session
        #     self.request.session.create()
        # create serializer instance
        serializer = self.serializer_class(data=request.data)
        # Check validity
        if serializer.is_valid():
            # get data out of request
            nickname = serializer.data.get('nickname')
            multiverseid = serializer.data('multiverseid')
            print("Invalid multiverseid: ",multiverseid )
            # Check if card has a nickname already:
            queryset = Card.objects.filter(multiverseid=multiverseid)
            if queryset.exists():
                # if the card with that ID also has no nickname then proceed:
                card = queryset[0]
                card.nickname = nickname
                card.save(update_fields=['nickname'])
            else:
                valid = False
                print("Invalid Card ID")
                # either that card doesnt exist or it has a nickname
            if valid:
                print("Valid card, Nicknaming now")
                return Response(CardSerializer(card).data, status=status.HTTP_201_CREATED)

        return Response({"Bad Request":"Invalid Card Id"}, status=status.HTTP_400_BAD_REQUEST)

