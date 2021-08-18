from django.urls import path
from .views import RoomView, CreateRoomView

urlpatterns = [
    path('sanitycheck/', sanity_check),
    path('cards/', CardView.as_view()),
    path('name-cards/', NickNameCardView.as_view()),
]
