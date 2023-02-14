import { productosService } from "../service/producto.service.js";

const btnAgregar = document.querySelector('#form-agregar-producto');

btnAgregar.addEventListener("submit", (e) => {

    e.preventDefault();
    validarNuevoProducto();

    const imagen = document.querySelector('#agregarImagen').value;
    const categoria = document.querySelector('#form-categoria').value;
    const nombre = document.querySelector('#form-nombre').value;
    const precio = document.querySelector('#form-precio').value;
    const descripcion = document.querySelector('#form-descripcion').value;

    productosService.crearProducto(imagen, categoria, nombre, precio, descripcion)
        .then(respuesta => {

        }).catch(error => alert(error))

});


