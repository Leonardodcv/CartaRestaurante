from rest_framework.serializers import ModelSerializer

from products.models import Product
from categorias.api.serializers import CategorySerializer

class ProductSerializer(ModelSerializer):
    category_date = CategorySerializer(source="category", read_only=True)

    class Meta:
        model = Product
        fields = ["id", "title", "image", "prices", "active", "category", "category_date"]