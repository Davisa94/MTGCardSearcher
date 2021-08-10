from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def main(req):
    return HttpResponse("<h2>Sanity Check</h2>")