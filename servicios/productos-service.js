const urlDesarrollo =   `http://localhost:3000/productos`
const urlProduccion = `https://solargeekapi.vercel.app/`

  
const listarProductos = () =>fetch(`https://solargeekapi.vercel.app//productos/`)
.then(respuesta =>respuesta.json()).catch(err => console.log(err));

  

const crearProducto = (nombre, precio, urlImagen, descripcion, categoria) =>fetch( `https://solargeekapi.vercel.app//productos/`,{
    method : "POST",
    headers : {
        "Content-Type":"application/json"
    },
    body : JSON.stringify({nombre, precio, urlImagen, descripcion, categoria, id: uuid.v4()}),

});

const eliminarProducto = (id) =>fetch(`https://solargeekapi.vercel.app//productos/${id}`,{
    method : "DELETE"
})

const detalleProducto =  (id) =>fetch(`https://solargeekapi.vercel.app//productos/${id}`)
.then(respuesta => respuesta.json());

const editarProducto = (nombre, precio, urlImagen, descripcion, categoria, id) =>{
return fetch(`https://solargeekapi.vercel.app//productos/${id}`,{
    method : "PUT",
    headers : {
        "Content-Type":"application/json"
    },
    body : JSON.stringify({nombre, precio, urlImagen, descripcion, categoria, id: uuid.v4()}),
    
})
.then(respuesta => console.log(respuesta))
.catch(err => console.log(err))
}



export const productosServicios = {
    listarProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    editarProducto,
}

