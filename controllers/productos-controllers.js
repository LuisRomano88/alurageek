import { productosService } from "../service/producto.service.js";


const tabla = document.querySelector('#datos-tabla');


const crearNuevaLinea = (imagen, categoria, nombre, precio, descripcion, id) => {
    const linea = document.createElement("tr");
    const contenido = `
        <td>${imagen}</td>
        <td>${categoria}</td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${descripcion}</td>
        <td><button class="tabla__button-editar type="button">
                <a href="../vistas/editar-producto.html?id=${id}">Editar</a>
            </button></td>
        <td><button class="tabla__button-eliminar" type="button" id="${id}">Eliminar</button></td> 
    `;

    linea.innerHTML = contenido;

    const eliminarProducto = linea.querySelector(".tabla__button-eliminar");
    eliminarProducto.addEventListener("click", () => {
        const id = eliminarProducto.id;
        productosService.eliminarProducto(id).then(respuesta => {
            window.location.href = "../vistas/tabla-producto.html"
        }).catch((error) => alert("Ocurrio Un Error"))
    });
    return linea;
}

productosService.listaProductos()
.then((datos) => {
    datos.forEach((producto) => {
        const nuevaLinea = crearNuevaLinea(producto.imagen, producto.categoria, producto.nombre, producto.precio, producto.descripcion, producto.id);
        tabla.appendChild(nuevaLinea)
    });
})
    .catch((error) => alert("ocurrio un error"));


