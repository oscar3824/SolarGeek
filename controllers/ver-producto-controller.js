import { productosServicios } from "../servicios/productos-service.js";


const obtenerData = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const idProducto = document.querySelector("[data-id]")
    const nombre = document.querySelector("[data-name]");
    const precio = document.querySelector("[data-price]")
    const urlImagen = document.querySelector("[data-url]");
    const descripcion = document.querySelector("[data-descripcion]")

    productosServicios.detalleProducto(id).then((productos) =>{
        nombre.textContent = productos.nombre;
        precio.textContent = productos.precio;
        urlImagen.src = productos.urlImagen;
        descripcion.textContent = productos.descripcion;
        idProducto.value = productos.id;
    })
    .catch(err => alert(err))
       

}
obtenerData();


