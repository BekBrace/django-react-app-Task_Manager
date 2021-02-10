from django.shortcuts import render


# viewsets class provides the implementation for CRUD operations by default, what we had to do was specify the serializer class and the query set.

from rest_framework import viewsets          # add this
from .serializers import TodoSerializer      # add this
from .models import Todo                     # add this


class TodoView(viewsets.ModelViewSet):       # add this
    serializer_class = TodoSerializer          # add this
    queryset = Todo.objects.all()              # add this
