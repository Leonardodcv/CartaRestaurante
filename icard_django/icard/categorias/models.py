from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="categorias")
    
    def __str__(self) :
        return self.title