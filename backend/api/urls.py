from django.urls import path
from . import views


urlpatterns = [
    path("room/", views.RoomView.as_view(), name="room_view_set"),
    path("create_room", views.CreateRoomView.as_view(), name="create_room_view"),
    path("get_room", views.GetRoom.as_view()),
]
