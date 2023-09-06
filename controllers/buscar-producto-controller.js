import { productosServicios } from "../servicios/productos-service.js";

// Función para crear la tarjeta de producto
const verProducto = (urlImagen, nombre, precio, categoria, id) => {
  const card = document.createElement("ul");
  card.classList.add("box");
  const contenido = `
    <li class="items">
      <div class="imagen__container">
        <img class="imagen__productos" src="${urlImagen}" alt="imagen del producto">
      </div>
      <h5 class="nombre_producto">${nombre}</h5>
      <p class="precio">${precio}</p>
      <a href="screens/verProducto.html?id=${id}" class="sobre"><button class="ver__producto" data-btn>Ver producto</button></a>
    </li>
  `;
  card.innerHTML = contenido;
  return card;
};

// ...

// Elementos DOM
const productoPorNombre = document.querySelector("[data-nombre-producto]");
const inputBuscador = document.querySelector(".input__busqueda");
const seccionEncontrados = document.getElementById("encontrados");
const btnBusqueda = document.querySelector(".btn__busqueda");
const buscados = document.querySelector(".buscados");

// Variables de búsqueda
const maximoProductos = 6;
let contadorProductos = 0;

// Evento de búsqueda
btnBusqueda.addEventListener("click", (e) => {
  e.preventDefault();

  // Obtener el valor del input de búsqueda y limpiarlo
  const inputValor = inputBuscador.value.trim().toLowerCase();

  // Verificar si se ha ingresado un nombre de producto válido
  if (inputValor.length === 0) {
    alert('Ingresa un nombre de producto válido');
    return;
  }

  // Limpiar resultados anteriores
  productoPorNombre.innerHTML = '';
  buscados.classList.remove("buscados__oculto");

  // Realizar la búsqueda de productos
  productosServicios.listarProductos().then((productos) => {
    const productosConCoincidencias = productos.filter((producto) => {
      return producto.nombre.toLowerCase().includes(inputValor);
    });

    if (productosConCoincidencias.length > 0) {
      productosConCoincidencias.forEach(({ urlImagen, nombre, precio, categoria, id }) => {
        if (contadorProductos < maximoProductos) {
          const product = verProducto(urlImagen, nombre, precio, categoria, id);
          productoPorNombre.appendChild(product);
          contadorProductos++;
        }
      });

      // Agregar temporizador para el desplazamiento
      setTimeout(() => {
        seccionEncontrados.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      buscados.classList.add("buscados__oculto");
      alert(`No se encontraron productos, intenta con otro nombre por favor.`);
    }
  }).catch((error) => {
    console.error('Error:', error);
  });
});
