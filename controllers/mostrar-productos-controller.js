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
        <a href="screens/verProducto.html?id=${id}" class="sobre"><button class="ver__producto" data-btn>ver producto</button></a>
    </li>
`
card.innerHTML = contenido;
return card;

};

const secciones = {
  iluminacion: document.querySelector("[data-iluminacion]"),
  kit: document.querySelector("[data-kit]")
};

const maxProductosPorSeccion = 6; // Define el número máximo de productos por sección

productosServicios.listarProductos().then((info) => {
  const contador = {
      iluminacion: 0,
      kit: 0
  };

  info.forEach(({ urlImagen, nombre, precio, categoria, id }) => {
      const producto = verProducto(urlImagen, nombre, precio, categoria, id);
      
      if (categoria === "iluminacion" && contador.iluminacion < maxProductosPorSeccion){
        secciones.iluminacion.appendChild(producto)
        contador.iluminacion++;
      }
      else if(categoria === "kit" && contador.kit<maxProductosPorSeccion){
        secciones.kit.appendChild(producto)
        contador.kit++;
      }
      
  });

  const btnMas= document.querySelectorAll(".ver__mas");
  btnMas.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
        const categoria = boton.getAttribute("data-categoria");
        window.location.href = `./screens/productosCategoria.html?categoria=${categoria}`;
    });
  });
})

.catch((error) => alert("Ocurrió un error"));

const btnSeccion = document.querySelector(".btn__banner")
const seccion = document.getElementById("reflectores")

btnSeccion.addEventListener("click", (event) =>{
  event.preventDefault();
  seccion.scrollIntoView({ behavior: 'smooth' }); 

 });
