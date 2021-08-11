from django.urls import path
from .views import *

urlpatterns = [
    path('sanitycheck/', sanity_check)
]
