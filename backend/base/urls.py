from django.urls import path
from . import views
urlpatterns=[
    path('api/',views.getRoutes,name='routes'),
    path('api/products/',views.getproducts,name='products'),
    path('api/product/<str:pk>/',views.getproduct,name='product'),
]