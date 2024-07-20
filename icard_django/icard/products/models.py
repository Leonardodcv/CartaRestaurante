from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="products")
    prices = models.DecimalField(max_digits=6, decimal_places=2)
    active = models.BooleanField(default=False)
    category = models.ForeignKey("categorias.Category", on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.title

