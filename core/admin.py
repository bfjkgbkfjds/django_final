from django.contrib import admin
from .models import Producto, Categoria, mascotas_salvadas

admin.site.register(Producto)
admin.site.register(Categoria)
admin.site.register(mascotas_salvadas)