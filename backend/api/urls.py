from django.urls import path 
from .views import RoomView


urlpatterns = [
    path('room/', RoomView.as_view() , name='room_view_set')
]
