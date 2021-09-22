from django.urls import path 
from . import views


urlpatterns = [
    path('', views.index, name="frontend_index"),
    path('join', views.index),
    path('create', views.index),
]
