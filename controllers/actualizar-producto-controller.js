import { productosServicios } from "../servicios/productos-service.js";

const formulario = document.querySelector("[data-formulario]")
const obtenerInfo = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        alert("Error id nulo")
    }
    else{

    }
    
    const nombre = document.querySelector("[data-name]");
    const precio = document.querySelector("[data-price]")
    const urlImagen = document.querySelector("[data-url]");
    const descripcion = document.querySelector("[data-descripcion]");
    const categoria = document.querySelector("[data-categoria]");

    productosServicios.detalleProducto(id).then((productos) =>{
        nombre.value = productos.nombre;
        precio.value = productos.precio;
        urlImagen.value = productos.urlImagen;
        descripcion.value = productos.descripcion;
        categoria.value = productos.categoria;


    })
    .catch(err => alert("ocurrio un error"))

}
obtenerInfo();

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-price]").value
    const urlImagen = document.querySelector("[data-url]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const categoria = document.querySelector("[data-categoria]").value;


    productosServicios.editarProducto(nombre, precio, urlImagen, descripcion, categoria, id);

})