import { productosService } from "../service/producto.service.js";

const divProductos = document.querySelector('#grid-container');


/*const crearProductoNuevo = (imagen, nombre, precio, id) => {
    const card = document.createElement("div");
    const cardContenido = `
        <div class="grid-item">
            <img id="img" alt="" src="${imagen}" >
            <p class="card__titulo">${nombre}</p>
            <p class="card__precio">$ ${precio}</p>
            <a href="producto-detalle.html">Ver producto</a>
        </div>    
    `;
    
    card.innerHTML = cardContenido;
    return card;
}

*/
    /*.then((data) => {
        data.forEach((producto) => {
            const nuevaCard = crearProductoNuevo(producto.imagen, producto.nombre, producto.precio);
            divProductos.appendChild(nuevaCard);
            return nuevaCard;
        })
    })
    .catch((error) => alert("ocurrio un error al mostrar los productos. Intente mas tarde"))*/

    productosService.verProductos()
    
    //productosService.verImagen()

    