from django.urls import path
from .views import CreateRoomView, RoomView


urlpatterns = [
    path('room', RoomView.as_view(), name='room_view_set'),
    path('create_room', CreateRoomView.as_view(), name='create_room_view'),
]
