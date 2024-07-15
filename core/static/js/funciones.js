function Iniciar() {
    let a = document.getElementById('username').value;
    let b = document.getElementById('password').value;

    if (a.length < 3) {
        alert('Ingrese un nombre con al menos 3 caracteres.');
        document.getElementById('username').value = "";
        document.getElementById('username').focus();
    } else if (b.length < 8) {
        alert('Su contraseña debe tener 8 caracteres o más.');
        document.getElementById('password').value = "";
        document.getElementById('password').focus();
    } else {
        alert('Formulario válido. Procediendo a iniciar sesión.');
    }
}

$(document).ready(function() {
    $("#loginForm").validate({
        rules: {
            username: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 8
            }
        }
    });
});
