import { productosServicios } from "../servicios/productos-service.js";
 const formu = document.querySelector("[data-form]")

 formu.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const nombre = document.querySelector("[data-nombre").value;
    const precio = document.querySelector("[data-precio]").value;
    const urlImagen = document.querySelector("[data-imagen]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const categoria = document.querySelector("[data-categoria]").value;

    productosServicios.crearProducto(nombre, precio, urlImagen, descripcion, categoria)
    .then((respuesta)=> respuesta)
    .catch((err) => err);
    
 })