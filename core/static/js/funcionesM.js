function mostrarMascotas() {
    let url = 'http://localhost:3300/nombres';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(perro => {
                const article = document.createRange().createContextualFragment(/*html*/`
                    <article>
                        <div class="image-container" style="max-height: 400px;">
                            <img src="${perro.imagen}" alt="${perro.nombre}">
                        </div>
                        <h2>${perro.nombre}</h2>
                        <span>${perro.estado}</span>
                    </article>
                `);

                const main = document.querySelector("main");
                main.append(article);
            });
        })
        .catch(error => console.log(error))
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarMascotas();
});
