document.addEventListener("DOMContentLoaded", function() {
            const comicId = localStorage.getItem('comicId');
            if (comicId) {
                fetch(`https://api-comics-p.onrender.com`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok ' + response.statusText);
                        }
                        return response.json();
                    })
                    .then(response => {
                            if (response.comics && response.comics.length > 0) {
                                const comic = response.comics.find(comic => comic.id == comicId);
                                if (comic) {
                                    const comicDetailsContainer = document.getElementById('comicDetailsContainer');
                                    comicDetailsContainer.innerHTML = `
                            <div class="card">
                                <div class="card-header">
                                    <h2 class="card-title">${comic.name || 'N/A'}</h2>
                                </div>
                                <div class="card-body">
                                    ${comic.imagen ? `<img src="${comic.imagen}" class="card-img-top" alt="${comic.name || 'Imagen del cómic'}">` : ''}
                                    <p class="card-text">Categoría: ${comic.categoria || 'N/A'}</p>
                                    <p class="card-text">Precio: ${comic.precio ? `${comic.precio}` : 'N/A'}</p>
                                    <p class="card-text">Stock disponible: ${comic.stock || 'N/A'}</p>
                                    <div class="buttons">
                                        <button class="btn btn-primary btn-add-to-cart">Añadir al carrito</button>
                                        <button class="btn btn-danger btn-back">Volver</button>
                                    </div>
                                </div>
                            </div>
                        `;

                        // Añadir event listener para el botón Volver
                        const backButton = document.querySelector('.btn-back');
                        backButton.addEventListener('click', function() {
                            window.location.href = 'index.html';
                        });

                        // Añadir event listener para el botón "Añadir al carrito"
                        const addToCartButton = document.querySelector('.btn-add-to-cart');
                        addToCartButton.addEventListener('click', function() {
                            addToCart(comic);
                        });

                    } else {
                        console.error('Cómic no encontrado. ID:', comicId);
                    }
                } else {
                    console.error('No se encontraron cómics en la respuesta');
                }
            })
            .catch(error => console.error('Error al obtener los datos del cómic:', error));
    } else {
        console.error('comicId no encontrado en localStorage');
    }
});

// Función para añadir cómics al carrito
function addToCart(comic) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(comic);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Cómic añadido al carrito');
}