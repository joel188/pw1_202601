let formulario = null;
let nombreCompletoInput = null;
let submitButton = null;
document.addEventListener("DOMContentLoaded", () => {
    formulario = document.getElementById("contactForm");
    nombreCompletoInput = document.getElementById("txtNombre");
    submitButton = document.getElementById("btnEnviar");
    submitButton.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (validarEspacioVacio(nombreCompletoInput.value)){
        } else {
            alert("Hay validaciones que fallan.");
        }
    });
});

function validarEspacioVacio(valor) {
    //TODO = validar
    //Expresiones Regulares--hay que estudiar
    return false;
}

/*
la hora tradiccional con am y pm
regs 01
*/


