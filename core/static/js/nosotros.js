document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api-nosotros-proyecto.onrender.com/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (!data || !data.info || !data.info[0]) {
                throw new Error('Datos no válidos recibidos de la API');
            }

            const contentDiv = document.getElementById('content');
            const info = data.info[0];

            const quienesSomosSection = document.createElement('section');
            quienesSomosSection.className = 'col-md-6 border-green';
            quienesSomosSection.innerHTML = `
                <h2>Quiénes somos</h2>
                <p>${info.nosotros || 'Información no disponible'}</p>
            `;

            const historiaSection = document.createElement('section');
            historiaSection.className = 'col-md-6 border-green';
            historiaSection.innerHTML = `
                <h2>Nuestra historia</h2>
                <p>${info.historia || 'Información no disponible'}</p>
            `;
            
            const row1 = document.createElement('div');
            row1.className = 'row centered-content';
            row1.appendChild(quienesSomosSection);

            const row2 = document.createElement('div');
            row2.className = 'row centered-content';
            row2.appendChild(historiaSection);

            contentDiv.appendChild(row1);
            contentDiv.appendChild(row2);

            const redirectButton = document.createElement('button');
            redirectButton.className = 'btn btn-danger btn-back'; // Agregar clase btn-danger para color rojo
            redirectButton.innerText = 'Volver';
            redirectButton.style.width = '6cm';
            redirectButton.style.height = '2cm';
            redirectButton.addEventListener('click', function() {
                window.location.href = 'index.html';
            });

            const buttonRow = document.createElement('div');
            buttonRow.className = 'row centered-content';
            buttonRow.appendChild(redirectButton);
            contentDiv.appendChild(buttonRow);
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});
