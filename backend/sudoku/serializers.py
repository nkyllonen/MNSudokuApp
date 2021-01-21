from rest_framework import serializers
from .models import Sudoku

class SudokuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sudoku
        fields = ('id', 'title', 'board')