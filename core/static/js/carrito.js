document.addEventListener("DOMContentLoaded", function() {
            const cartContainer = document.getElementById('cartContainer');
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (cart.length === 0) {
                cartContainer.innerHTML = '<p class="text-center">El carrito está vacío</p>';
                return;
            }

            cart.forEach(comic => {
                        const comicCard = document.createElement('div');
                        comicCard.className = 'col-md-4 mb-4';
                        comicCard.innerHTML = `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${comic.name || 'N/A'}</h2>
        </div>
        <div class="card-body">
            ${comic.imagen ? `<img src="${comic.imagen}" class="card-img-top" alt="${comic.name || 'Imagen del cómic'}">` : ''}
            <p class="card-text">Categoría: ${comic.categoria || 'N/A'}</p>
            <p class="card-text">Precio: ${comic.precio ? `${comic.precio}` : 'N/A'}</p>
            <p class="card-text">Stock disponible: ${comic.stock || 'N/A'}</p>
            <button class="btn btn-danger btn-remove-from-cart" data-id="${comic.id}">Eliminar del carrito</button>
        </div>
    </div>
`;
cartContainer.appendChild(comicCard);
});

document.querySelectorAll('.btn-remove-from-cart').forEach(button => {
button.addEventListener('click', function() {
    const comicId = this.getAttribute('data-id');
    removeFromCart(comicId);
});
});
});


function removeFromCart(comicId) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart = cart.filter(comic => comic.id != comicId);
localStorage.setItem('cart', JSON.stringify(cart));
alert('Cómic eliminado del carrito');
location.reload(); 
}
