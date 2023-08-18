import { productosServicios } from "../servicios/productos-service.js";

const crearProducto = (nombre , precio,  urlImagen, descripcion, categoria, id) =>{
    const card = document.createElement("ul")
    card.classList.add("box__productos--admin")
    const contenido = `
        <li class="items__productos--admin">
            <a href="/screens/editarProducto.html?id=${id}"><i class="fa-solid fa-pencil icon__edit" id= "${id}"></i></a>
            <a href="#"><i class="fa-solid fa-trash icon__delete"  id= "${id}"></i> </a>
            <img class="imagen__productos--admin" src=${urlImagen} alt="esto es una imagen">
            <h5 class="subtitulo__productos--admin">${nombre}</h5>
            <h6 class="precio">${precio}</h6>
            <h6 class="id__producto">${id}</h6>
            
        </li>
`
card.innerHTML=contenido;
const btn = card.querySelector(".icon__delete")
btn.addEventListener("click", () => {
    const id = btn.id;
    productosServicios.eliminarProducto(id).then(respuesta =>{
        
    })
    .catch(err => alert("error"));

})
return card;
};

const section = document.querySelector("[data-produc]");

productosServicios.listarProductos().then((info =>{
    info.forEach(({nombre, precio , urlImagen, descripcion, categoria, id}) => {
        const nuevoProducto = crearProducto(nombre, precio, urlImagen, descripcion, categoria, id );
        section.appendChild(nuevoProducto);
        
    });
}))
.catch((error)=>(error));



