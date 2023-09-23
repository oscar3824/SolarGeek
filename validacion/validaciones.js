const miFormulario = document.querySelector("[data-form]");

miFormulario.addEventListener("submit", (evento) => {
    alert("Tu información se envó con exito, te llevaré de vuelta a la pagina de inicio")
    
  });

export  const valida = (input) =>{
    const tipoInput = input.dataset.tipo;
    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""

    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = 
        mostrarMensajeError(tipoInput, input);

    }
}
function mostrarMensajeError(tipoInput, input) {
    let mensaje = "";
    tipoErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesError[tipoInput][error];
        }
    })
    return mensaje;
}

const validadores ={

};
const tipoErrores = [
    "valueMissing",
    "typeMismatch",
    "customError",
    "patternMismatch",
];
const mensajesError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio",

    },
    telefono: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El campo telefono debe tener 10 caracteres "


    },
    mensaje:{
        valueMissing: "Este campo no puede estar vacio",


    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",

    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido debe contener 10 numeros"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 y 20 caracteres"
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La ciudad debe contener entre 10 y 20 caracteres"

    },
    imagen: {
        valueMissing: "Este campo no puede estar vacio",
    }

};
/*
const miFormulario = document.querySelector(".contato__home");

miFormulario.addEventListener("submit", function (event) {
  const todosLosCamposValidos = Array.from(inputs).every(input => input.validity.valid);

  if (todosLosCamposValidos) {
    alert("¡Mensaje enviado con éxito!");
  }
});


*/