from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from mainapp.views import CategoryViewSet, ProductsViewSet, SliderViewSet
from backend import settings

router = DefaultRouter()
router.register('slider', SliderViewSet)
router.register('category', CategoryViewSet)
router.register('products', ProductsViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
