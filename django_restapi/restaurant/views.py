from django.shortcuts import render

# Create your views here.

from .models import Restaurant, Review
from .serializers import RestaurantSerializer, ReviewSerializer
from rest_framework import viewsets

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer