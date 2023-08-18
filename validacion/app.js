import { valida } from "./validaciones.js";


const inputs = document.querySelectorAll(".input");

inputs.forEach((input) =>{
    input.addEventListener("blur", (input)=>{
    valida(input.target)
    })
})
/*

const inputImagen = document.getElementById("inputImagen");

// Manejar archivo(s) seleccionado(s) desde el input
inputImagen.addEventListener("change", (event) => {
  const files = event.target.files;

  if (files.length > 0) {
    for (const file of files) {
      handleFile(file);
    }
  }
});


function handleFile(file) {
  // Verificar que es una imagen
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    // Leer el archivo y mostrar la imagen
    reader.onload = function () {
      const img = new Image();
      img.src = reader.result;
      inputImagen.insertAdjacentElement("afterend", img); // Insertar la imagen después del input
    };

    reader.readAsDataURL(file);
  } else {
    alert("Por favor, selecciona una imagen.");
  }
  
}
*/