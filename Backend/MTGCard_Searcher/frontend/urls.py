from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('CardSearch', index),
    path('NickNameCard', index),
]
