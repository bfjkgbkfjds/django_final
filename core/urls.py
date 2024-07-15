# core/urls.py
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'comics', views.ComicViewSet)

urlpatterns = [
    path('', views.index, name="index"),
    path('comic/<int:comic_id>/', views.comic, name="comic"),
    path('api/', include(router.urls)),
    path('Nosotros/', views.Nosotros, name="Nosotros"),
    path('registro/', views.registro, name="registro"),
    path('carrito/', views.carrito, name="carrito"),
    path('logout/', views.cerrar, name="cerrar"),
    path('modificar/<int:id>/', views.modificar_producto, name='modificar_producto'),
    path('eliminar_producto_admin/<int:id>/', views.eliminar_producto_admin, name='eliminar_producto_admin'),
    path('tienda/', views.tienda, name='tienda'),
    path('agregar/<int:id>/', views.agregar_producto, name='agregar_producto'),
    path('limpiar-carrito/', views.limpiar_carrito, name='limpiar_carrito'),
    path('generar_boleta/', views.generar_boleta, name='generar_boleta'),
    path('productos/mascotas/', views.lista_mascotas_salvadas, name='lista_mascotas_salvadas'),
    path('lista_productos/', views.lista_productos, name='lista_productos'),
    path('restar/<int:id>/', views.restar_producto_carrito, name='restar_producto_carrito'),
    path('agregar/<int:id>/', views.agregar_producto_carrito, name='agregar_producto_carrito'),
    path('eliminar/<int:id>/', views.eliminar_producto_carrito, name='eliminar_producto_carrito'),
    path('contacto/', views.contacto, name='contacto'),
    path('categoria/<str>/', views.categoria, name='categoria'),
]
