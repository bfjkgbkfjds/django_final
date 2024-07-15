// Función para realizar el login
function iniciarSesion() {
    // Obtener los datos del formulario de login
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validar que los campos no estén vacíos (agregar otras validaciones según necesites)
    if (username && password) {
        // Simular autenticación (puedes hacer una petición AJAX a tu backend aquí)
        // Por simplicidad, se asume que el login es exitoso si los campos no están vacíos

        // Guardar información de sesión en localStorage
        var sessionUser = {
            username: username,
            loggedIn: true
        };

        localStorage.setItem('user', JSON.stringify(sessionUser));

        // Redirigir al usuario a la página de inicio o a donde sea necesario
        window.location.href = '/'; // Redirige a la página de inicio
    } else {
        alert('Por favor completa todos los campos.');
    }
}

// Event listener para el botón de login
document.getElementById('login-btn').addEventListener('click', iniciarSesion);