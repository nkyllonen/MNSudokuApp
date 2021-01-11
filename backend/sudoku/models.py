from django.db import models

def board_default():
    return {'board': []}
# Create your models here.
class Sudoku(models.Model):
    title = models.CharField(max_length=120)
    board = models.JSONField(default = board_default)


    def _str_(self):
        return self.title
