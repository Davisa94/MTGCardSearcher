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
    def post(self, request, format= None):
        # Check for active session
        if not self.request.session.exists(self.request.session.session_key):
            # create a new session
            self.request.session.create()
        # create serializer instance
        serializer = self.serializer_class(data=request.data)
        # Check validity
        if serializer.is_valid():
            # get data out of request
            id = serializer.data.id
            nickname = serializer.data.nickname
            # Check if card has a nickname already:
            queryset = Card.objects.filter(id=id, ickname = "")


