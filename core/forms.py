from django import forms 
from django.forms import ModelForm
from django.forms import widgets
from django.forms.widgets import Widget
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Producto, mascotas_salvadas

class FormProducto(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['categoria', 'idProd', 'nombre', 'descripcion', 'imagen', 'precio', 'detalles', 'stock']
        labels = {
            'categoria': 'Categoría',
            'idProd': 'ID Producto',
            'nombre': 'Nombre',
            'descripcion': 'Descripción',
            'imagen': 'Imagen',
            'precio': 'Precio',
            'detalles': 'Detalles',
            'stock': 'Stock',
        }
        widgets = {
            'categoria': forms.Select(attrs={'class': 'form-control', 'id': 'categoria'}),
            'idProd': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Ingrese ID del Producto', 'id': 'idprod'}),
            'nombre': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Ingrese Nombre del Producto', 'id': 'nombre'}),
            'descripcion': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Ingrese Descripción del Producto', 'id': 'descripcion'}),
            'imagen': forms.FileInput(attrs={'class': 'form-control', 'id': 'imagen'}),
            'precio': forms.NumberInput(attrs={'class': 'form-control', 'placeholder': 'Ingrese Precio del Producto', 'id': 'precio'}),
            'detalles': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Ingrese Detalles del Producto', 'id': 'detalles'}),
            'stock': forms.NumberInput(attrs={'class': 'form-control', 'placeholder': 'Ingrese Stock disponible', 'id': 'stock'}),
        }

class Form_Mascotas_Salvadas(forms.ModelForm):
    class Meta:
        model = mascotas_salvadas
        fields = ['nombre', 'imagen', 'estado']
        labels = {
            'nombre': 'Nombre',
            'imagen': 'Imagen',
            'estado': 'Estado',
        }
        widgets = {
            'nombre': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Ingrese Nombre de la Mascota',
                    'id': 'nombre'
                }
            ),
            'imagen': forms.FileInput(
                attrs={
                    'class': 'form-control',
                    'id': 'imagen'
                }
            ),
            'estado': forms.Textarea(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Ingrese Estado de la Mascota',
                    'id': 'estado'
                }
            ),
        }

class RegistroUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = [ 'username', 'first_name', 'last_name', 'email', 'password1', 'password2']