
const formLogin = document.querySelector('#form-login');

const btnLogin = document.querySelector('#btn-login');

const spanEmail = document.querySelector('#login-span-errorEmail');

const spanPassword = document.querySelector('#login-span-errorPassword');


const mensajesErrores = {

    errorEmail: "El formato de email es invalido",
    errorPassword: "Contraseña incorrecta </br> De contener al menos una mayuscula </br> al menos dos números </br> 8 caracteres max.",
    errorUsuario: "Usuario no registrado"
}

const pattern = {
    patternEmail : /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    // al menos una mayuscula, dos numeros, 8 carectes
    patternContraseña : /^(?=.*[A-Z])(?=.*[0-9].*[0-9]).{8}$/   
}

const valorCampo = {
    email: false,
    password: false
}

function validarFormLogin(){
    if(formLogin.email.value === "" || formLogin.password.value === ""){
        errorCamposVacios.style.display = "block";
    }

    if(!pattern.patternEmail.test(formLogin.email.value)){
        spanEmail.innerHTML = mensajesErrores.errorEmail;
        return focus();
    }else{
        valorCampo.email = true;
        spanEmail.innerHTML = "";
    }

    if(!pattern.patternContraseña.test(formLogin.password.value)){
        spanPassword.innerHTML = mensajesErrores.errorPassword;
        return focus();
    }else{
        valorCampo.password = true;
        spanPassword.innerHTML = "";
    }
    return true;
}

const usuario = {
    email: "demo@email.com",
    password: "Qwerty12"
}

localStorage.setItem("usuario", JSON.stringify(usuario));



const usuarioLocalStorage = JSON.parse(localStorage.getItem("usuario"));



formLogin.addEventListener("submit", (e) => {
    
    e.preventDefault();

    if (valorCampo.email && valorCampo.password) {
        if (usuarioLocalStorage.email === formLogin.email.value && usuarioLocalStorage.password === formLogin.password.value) {
            window.location = "agregarProductos.html";
        }
        else if (usuarioLocalStorage.password != formLogin.password.value) {
            errorUsuario.style.display = "none";
            spanPassword.innerHTML = mensajesErrores.errorPassword;
            return focus();
        } 
        else {
            errorUsuario.style.display = "block";
        }
    }
});

btnLogin.addEventListener("click", ()=>{
    validarFormLogin();
});