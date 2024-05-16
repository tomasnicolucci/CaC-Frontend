
const validarContacto = (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const esSocio = document.getElementById("esSocio");
    const consulta = document.getElementById("consulta");
    const mensaje = document.getElementById("mensaje");
    
    const divErrorNombre = document.querySelector("#error-nombre");
    const divErrorEmail = document.querySelector("#error-email");
    const divErrorTelefono = document.querySelector("#error-telefono");
    const divErrorEsSocio = document.querySelector("#error-esSocio");
    const divErrorConsulta = document.querySelector("#error-consulta");
    const divErrorMensaje = document.querySelector("#error-mensaje");
    
    divErrorNombre.innerHTML = "";
    divErrorEmail.innerHTML = "";
    divErrorTelefono.innerHTML = "";
    divErrorEsSocio.innerHTML = "";
    divErrorConsulta.innerHTML = "";
    divErrorMensaje.innerHTML = "";

    if (!nombre.value) {
        divErrorNombre.insertAdjacentText("afterbegin","El nombre no puede estar vacío");
    }

    if(!email.value){
        divErrorEmail.insertAdjacentText("afterbegin", "El email no puede estar vacío");
    }else if(email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1){
        divErrorEmail.insertAdjacentText("afterbegin", "Ingrese un email válido");
    }

    if(!telefono.value){
        divErrorTelefono.insertAdjacentText("afterbegin", "El teléfono no puede estar vacío");
    }

    if(!esSocio.checked){
        divErrorEsSocio.insertAdjacentText("afterbegin", "Debe elegir una opción");
    }

    if(consulta.value === "--Seleccione una opción--"){
        divErrorConsulta.insertAdjacentText("afterbegin", "Debe elegir una opción");
    }
    
    if(!mensaje.value){
        divErrorMensaje.insertAdjacentText("afterbegin", "El mensaje no puede estar vacío");
    }
}

const formularioContacto = document.querySelector("#contact");
formularioContacto.addEventListener('submit',validarContacto);

