import datetime
from django.db import models
from distutils.command.upload import upload
from django.contrib.auth import get_user_model
from django.conf import settings
from django.contrib.auth.models import User


class Comic(models.Model):
    categoria = models.CharField(max_length=50)
    name = models.CharField(max_length=200)
    precio = models.CharField(max_length=50)
    imagen = models.URLField()
    stock = models.IntegerField()

    def __str__(self):
        return self.name

class Categoria(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    categoria = models.ForeignKey('Categoria', on_delete=models.CASCADE)
    idProd = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='productos/')
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    detalles = models.TextField()
    stock = models.PositiveIntegerField()

    def __str__(self):
        return self.nombre


class mascotas_salvadas(models.Model):
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(upload_to='productos/')
    estado= models.TextField()

    def __str__(self):
        return self.nombre

class Boleta(models.Model):
    id_boleta = models.AutoField(primary_key=True)
    total = models.BigIntegerField()
    fechaCompra = models.DateTimeField(default=datetime.datetime.now)

    def __str__(self):
        return str(self.id_boleta)
    
