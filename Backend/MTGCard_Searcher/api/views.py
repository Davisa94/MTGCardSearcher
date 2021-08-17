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
        pass