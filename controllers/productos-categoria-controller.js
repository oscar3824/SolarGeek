import { productosServicios } from "../servicios/productos-service.js";
const verProducto = (urlImagen, nombre, precio, categoria, id) =>{
    const card = document.createElement("ul")
    card.classList.add("box")
    const contenido = ` 
    <li class="items">
    <div class="imagen__container">
    <img class="imagen__productos" src="${urlImagen}" alt="imagen del producto">
    </div>
        <h5 class="nombre_producto">${nombre}</h5>
        <p class="precio" >${precio}</p>
        <a href="verProducto.html?id=${id}" class="sobre"><button class="ver__producto" data-btn>ver producto</button></a>

    </li>
`
card.innerHTML = contenido;
return card;

};

const seccion = document.querySelector("[data-produc-categoria]")
 const url = new URL(window.location);
 const categoriaSeleccionada = url.searchParams.get("categoria")


    productosServicios.listarProductos().then((info) => {

        info.forEach(({ urlImagen, nombre, precio, categoria, id }) => {
            const producto = verProducto(urlImagen, nombre, precio, categoria, id);    
            if(categoria === categoriaSeleccionada){
                seccion.appendChild(producto)
    
            }
        });
    
    })
    .catch((error) => alert("Ocurrió un error"));
    

