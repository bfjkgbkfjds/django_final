function validarFormulario() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let password = document.getElementById('password').value;
    let cPassword = document.getElementById('cPassword').value;

    if (firstName.length < 3) {
        alert('El nombre debe tener más de 3 caracteres.');
        document.getElementById('firstName').focus();
        return false;
    }

    if (lastName.length < 3) {
        alert('El apellido debe tener más de 3 caracteres.');
        document.getElementById('lastName').focus();
        return false;
    }

    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        document.getElementById('password').focus();
        return false;
    }

    if (password !== cPassword) {
        alert('Las contraseñas no coinciden.');
        document.getElementById('cPassword').focus();
        return false;
    }

    alert('Formulario válido. Procediendo a enviar.');
    return true;
}
