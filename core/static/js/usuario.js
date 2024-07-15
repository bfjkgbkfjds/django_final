// Función para manejar el registro de usuario
function registrarUsuario(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Capturar los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var direccion = document.getElementById('direccion').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;

    // Validar que las contraseñas coincidan
    if (password !== confirm_password) {
        alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
        return;
    }

    // Crear el objeto de usuario
    var user = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        email: email,
        username: email, // Usar el email como nombre de usuario por simplicidad
        password: password
    };

    // Guardar el usuario en sessionStorage
    sessionStorage.setItem('user', JSON.stringify(user));

    // Mostrar mensaje de registro exitoso
    document.getElementById('registroExitoso').style.display = 'block';

    // Actualizar el nombre de usuario en la parte superior derecha
    document.getElementById('usernameDisplay').textContent = user.username;

    // Limpiar el formulario (opcional)
    document.getElementById('registerForm').reset();
}

// Event listener para el envío del formulario de registro
document.getElementById('registerForm').addEventListener('submit', registrarUsuario);