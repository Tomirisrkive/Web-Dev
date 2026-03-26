from django.http import JsonResponse
from .models import Product, Category

# 1. Список всех товаров
def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

# 2. Один товар по ID
def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(product.to_json())
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

# 3. Список всех категорий
def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

# 4. Одна категория по ID
def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category.to_json())
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

# 5. Все товары внутри одной категории
def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        products_json = [p.to_json() for p in products]
        return JsonResponse(products_json, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)