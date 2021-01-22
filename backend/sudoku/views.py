from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SudokuSerializer
from .models import Sudoku

# Create your views here.
class SudokuView(viewsets.ModelViewSet):
    serializer_class = SudokuSerializer
    queryset = Sudoku.objects.all()  # represents all objects (for querying)