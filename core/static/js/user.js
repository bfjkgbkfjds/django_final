// static/js/usuario.js
document.addEventListener('DOMContentLoaded', function() {
    var user = JSON.parse(localStorage.getItem('user'));

    // Verificar si hay un usuario almacenado en localStorage
    if (user && user.username) {
        // Actualizar el contenido del span con el nombre de usuario
        document.getElementById('usernameDisplay').textContent = user.username;
    } else {
        // Manejar el caso cuando no hay usuario almacenado (opcional)
        document.getElementById('usernameDisplay').textContent = 'Invitado';
    }
});