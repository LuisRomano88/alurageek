import { productosService } from "../service/producto.service.js";

const obtenerInformacion = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        alert("Ocurrio un error")
    }

    const imagen = document.querySelector('#agregarImagen');
    const categoria = document.querySelector('#form-categoria');
    const nombre = document.querySelector('#form-nombre')
    const precio = document.querySelector('#form-precio');
    const descripcion = document.querySelector('#form-descripcion');

    productosService.editarProducto(id).then((producto) => {
        imagen.value = producto.imagen;
        categoria.value = producto.categoria;
        nombre.value = producto.nombre;
        precio.value = producto.precio;
        descripcion.value = producto.descripcion

    })
};

const formEditar = document.querySelector('#form-editar-producto');

formEditar.addEventListener("submit", (e)=>{
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const imagen = document.querySelector('#agregarImagen').value;
    const categoria = document.querySelector('#form-categoria').value;
    const nombre = document.querySelector('#form-nombre').value;
    const precio = document.querySelector('#form-precio').value;
    const descripcion = document.querySelector('#form-descripcion').value;

    productosService.actualizarProducto(imagen, categoria, nombre, precio, descripcion, id).then(()=>{
        window.location.href = "../vistas/tabla-producto.html";
    })
});

obtenerInformacion();


