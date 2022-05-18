from rest_framework.serializers import ModelSerializer

from mainapp.models import Category, Products, Slider


class SliderSerializer(ModelSerializer):
    class Meta:
        model = Slider
        fields = '__all__'


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductsSerializer(ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Products
        fields = '__all__'
