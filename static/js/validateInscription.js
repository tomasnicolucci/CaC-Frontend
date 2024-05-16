const validarInscripcion = (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const esSocio = document.getElementById("esSocio");
    const actividad = document.getElementById("actividad");
    
    const divErrorNombre = document.querySelector("#error-nombre");
    const divErrorEmail = document.querySelector("#error-email");
    const divErrorEsSocio = document.querySelector("#error-esSocio");
    const divErrorActividad = document.querySelector("#error-actividad");
    
    divErrorNombre.innerHTML = "";
    divErrorEmail.innerHTML = "";
    divErrorEsSocio.innerHTML = "";
    divErrorActividad.innerHTML = "";

    if (!nombre.value) {
        divErrorNombre.insertAdjacentText("afterbegin","El nombre no puede estar vacío");
    }

    if(!email.value){
        divErrorEmail.insertAdjacentText("afterbegin", "El email no puede estar vacío");
    }else if(email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1){
        divErrorEmail.insertAdjacentText("afterbegin", "Ingrese un email válido");
    }

    if(!esSocio.checked){
        divErrorEsSocio.insertAdjacentText("afterbegin", "Debe elegir una opción");
    }

    if(actividad.value === "--Seleccione una opción--"){
        divErrorActividad.insertAdjacentText("afterbegin", "Debe elegir una opción");
    }
}

const formularioInscripcion = document.querySelector("#inscripcion");
formularioInscripcion.addEventListener('submit',validarInscripcion);