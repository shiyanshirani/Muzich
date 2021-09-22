from django.shortcuts import render
from rest_framework import generics

from .models import *
from .serializers import *
# Create your views here.



class RoomView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer