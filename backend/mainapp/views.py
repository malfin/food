from rest_framework.viewsets import ModelViewSet
from rest_framework import filters

from mainapp.serializers import CategorySerializer, ProductsSerializer, SliderSerializer
from mainapp.models import Category, Products, Slider


class SliderViewSet(ModelViewSet):
    queryset = Slider.objects.all()
    serializer_class = SliderSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductsViewSet(ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['category']
