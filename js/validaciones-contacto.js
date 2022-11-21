
/*

const form = document.querySelector('#contacto-form');

const btnEnviar = document.querySelector('#btn-enviar-mensaje');

const spanNombre = document.querySelector('#contacto-span-errorNombre');

const spanMensaje = document.querySelector('#contacto-span-errorMensaje');

const mensajesErrores = {
    errorNombre: "Ingrese al menos 3 letras, sin números, sin caracteres especiales",
    errorMensaje: "Debe completar este campo. Minimo 10 letras. Maximo 120 letras"
};

const pattern = {
    patternNombre: /[a-zA-Z]{3,40}/,
    patternMensaje: /^[a-zA-Z0-9_ ]{10,120}/
};

const valorCampo = {
    nombre: false,
    mensaje: false
};



function validarFormContacto(){

    if (form.nombre.value === "" || form.mensaje.value === "" ) {
            errorCamposVacios.style.display = "block";
    }
    
    if(!pattern.patternNombre.test(form.nombre.value) ){
        spanNombre.innerHTML = mensajesErrores.errorNombre;
        return focus();
    }else {
        valorCampo.nombre = true;
        spanNombre.innerHTML = "";
    }
    if(!pattern.patternMensaje.test(form.mensaje.value) ){
        spanMensaje.innerHTML = mensajesErrores.errorMensaje;
        return focus();
    }else {
        valorCampo.mensaje = true;
        spanMensaje.innerHTML = "";
    }
    return true;
}


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if (valorCampo.nombre && valorCampo.mensaje) {

        errorCamposVacios.style.display = "none";
        camposCorrectos.style.display = "block";

         setInterval(() => {
            camposCorrectos.style.display = "none";
        }, 3000); 
        form.reset();
    }
}); 


btnEnviar.addEventListener("click", ()=>{
    validarFormContacto();
});

*/