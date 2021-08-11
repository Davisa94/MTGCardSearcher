from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def sanity_check(req):
    return HttpResponse("<h2>Sanity Check</h2>")

def main(req):
    pass