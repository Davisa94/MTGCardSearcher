from django.urls import path
from .views import CardView, NickNameCardView

urlpatterns = [
    path('sanitycheck/', sanity_check),
    path('cards/', CardView.as_view()),
    path('name-cards/', NickNameCardView.as_view()),
]
