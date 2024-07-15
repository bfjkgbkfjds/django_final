from decimal import Decimal

class Carrito:
    def __init__(self, request):
        self.request = request
        self.session = request.session
        carrito = self.session.get('carrito')
        if not carrito:
            carrito = self.session['carrito'] = {}
        self.carrito = carrito

    def agregar_producto(self, producto):
        producto_id = str(producto.idProd)
        if producto_id in self.carrito:
            self.carrito[producto_id]['cantidad'] += 1
        else:
            self.carrito[producto_id] = {
                'precio': str(producto.precio),
                'cantidad': 1,
            }
        self.guardar()

    def eliminar_producto(self, producto):
        producto_id = str(producto.idProd)
        if producto_id in self.carrito:
            del self.carrito[producto_id]
            self.guardar()

    def restar_producto(self, producto):
        producto_id = str(producto.idProd)
        if producto_id in self.carrito:
            if self.carrito[producto_id]['cantidad'] > 1:
                self.carrito[producto_id]['cantidad'] -= 1
            else:
                del self.carrito[producto_id]
            self.guardar()

    def limpiar(self):
        self.session["carrito"] = {}
        self.session.modified = True

    def guardar(self):
        self.session['carrito'] = self.carrito
        self.session.modified = True
