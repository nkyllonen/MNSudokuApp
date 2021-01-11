from django.contrib import admin
from .models import Sudoku

class SudokuAdmin(admin.ModelAdmin):
    list_display = ('title', 'board')

# Register your models here
admin.site.register(Sudoku, SudokuAdmin)