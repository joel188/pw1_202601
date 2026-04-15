// Expresiones Regulares
const regexIsEmpty = /^\s*$/;
const regexIsEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/;

document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos del DOM
    const formulario = document.querySelector("form");
    const nombreInput = document.getElementById("txtNombre");
    const edadInput = document.getElementById("intEdad");
    const correoInput = document.getElementById("txtCorreo");

    formulario.addEventListener("submit", (e) => {
        // Limpiar errores previos
        limpiarErrores();

        let formularioValido = true;

        // Validar Nombre
        if (validarEspacioVacio(nombreInput.value)) {
            mostrarError("errorNombre", "El nombre no puede estar vacío.", nombreInput);
            formularioValido = false;
        }

        // Validar Edad (Debe ser un número y no estar vacío)
        if (validarEspacioVacio(edadInput.value) || edadInput.value <= 0) {
            mostrarError("errorEdad", "Ingresa una edad válida.", edadInput);
            formularioValido = false;
        }

        // Validar Correo
        if (!validarCorreoElectronico(correoInput.value)) {
            mostrarError("errorCorreo", "El formato del correo no es válido.", correoInput);
            formularioValido = false;
        }

        // Si hay errores, detenemos el envío
        if (!formularioValido) {
            e.preventDefault();
        }
    });
});

/**
 * Funciones de Validación (Mantenidas según el original)
 */

function validarEspacioVacio(valor) {
    return regexIsEmpty.test(valor);
}

function validarCorreoElectronico(valor) {
    return regexIsEmail.test(valor);
}

/**
 * Funciones auxiliares para la UI
 */

function mostrarError(spanId, mensaje, inputElement) {
    const errorSpan = document.getElementById(spanId);
    if (errorSpan) {
        errorSpan.innerText = mensaje;
        errorSpan.style.display = "block"; // Asegura que sea visible
    }
    inputElement.classList.add('error'); // Clase para estilos CSS
}

function limpiarErrores() {
    // Limpia todos los mensajes de error
    const errores = document.querySelectorAll(".error-msg");
    errores.forEach(span => span.innerText = "");
    
    // Quita la clase error de los inputs
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.classList.remove('error'));
}