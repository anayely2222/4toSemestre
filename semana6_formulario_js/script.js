const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

function validarNombre() {
    if (nombre.value.length >= 3) {
        marcarValido(nombre, "errorNombre", "");
        return true;
    } else {
        marcarInvalido(nombre, "errorNombre", "Mínimo 3 caracteres");
        return false;
    }
}

function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo.value)) {
        marcarValido(correo, "errorCorreo", "");
        return true;
    } else {
        marcarInvalido(correo, "errorCorreo", "Correo no válido");
        return false;
    }
}

function validarPassword() {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (password.value.length >= 8 && regex.test(password.value)) {
        marcarValido(password, "errorPassword", "");
        return true;
    } else {
        marcarInvalido(password, "errorPassword", "Mínimo 8 caracteres, un número y un carácter especial");
        return false;
    }
}

function validarConfirmacion() {
    if (confirmPassword.value === password.value && confirmPassword.value !== "") {
        marcarValido(confirmPassword, "errorConfirm", "");
        return true;
    } else {
        marcarInvalido(confirmPassword, "errorConfirm", "Las contraseñas no coinciden");
        return false;
    }
}

function validarEdad() {
    if (edad.value >= 18) {
        marcarValido(edad, "errorEdad", "");
        return true;
    } else {
        marcarInvalido(edad, "errorEdad", "Debe ser mayor de 18 años");
        return false;
    }
}

function marcarValido(input, errorId, mensaje) {
    input.classList.add("valido");
    input.classList.remove("invalido");
    document.getElementById(errorId).textContent = mensaje;
}

function marcarInvalido(input, errorId, mensaje) {
    input.classList.add("invalido");
    input.classList.remove("valido");
    document.getElementById(errorId).textContent = mensaje;
}

function validarFormulario() {
    const valido =
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmacion() &&
        validarEdad();

    btnEnviar.disabled = !valido;
}

// Eventos en tiempo real
nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

// Envío del formulario
document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario validado correctamente ✅");
});
