# from django_filters.rest_framework import FilterSet
# from ..models import Product


# class ProductFilter(FilterSet):
#     class Meta:
#         model = Product
#         fields = {
#             'category_id': ['exact'],
#             'price': ['gt', 'lt']
#         }


from django_filters.rest_framework import FilterSet, CharFilter, NumberFilter
from ..models import Product


class ProductFilter(FilterSet):
    category = CharFilter(field_name="category__title", lookup_expr='iexact')
    min_price = NumberFilter(field_name="price", lookup_expr='gte')
    max_price = NumberFilter(field_name="price", lookup_expr='lte')

    class Meta:
        model = Product
        fields = ['category']
