
//fetch api - llamada al servidor
const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

//const verProductos = () => fetch("http://localhost:3000/producto")
//  .then((respuesta) => respuesta.json());


const divPrincipal = document.querySelector('#grid-container');

//const imgPrev = document.querySelector('#imgPrev');
//console.log(imgPrev)

  async function verProductos(){
    const respuesta = await fetch("http://localhost:3000/producto")
    const data = await respuesta.json();  
  
 
    data.forEach(producto => {

      const card = document.createElement('div');
      card.className = "grid-item";

     
      const img = document.createElement('img');
      //img.src = `${producto.imagen}`
      img.src = producto.imagen;  
      const imagenObj = new Image(img.src);
      console.log(img.src);
      console.log(imagenObj);



      const nombre = document.createElement('p');
      nombre.textContent = producto.nombre;

      const precio = document.createElement('p');
      precio.textContent = producto.precio;
      
      const verProducto = document.createElement('a');
      verProducto.innerHTML = "Ver Producto";

      card.append(img, nombre, precio, verProducto);
      divPrincipal.append(card)
      

    }); 
  }

  
/*const verImagen = () =>
  fetch("http://localhost:3000/producto")
    .then((respuesta) => respuesta.blob())
    .then((resp) => {
      resp.name = 'image.png';
      resp.lastModified = new Date();
      const archivo = new File([resp], 'image.png', {
        type: resp.type,
      });
      const img = document.createElement('img');
      const imgPath = URL.createObjectURL(archivo);
      img.src = imgPath; 
      console.log("src ",imgPath);
    })
    .catch((error) => (error));
*/


const crearProducto = (imagen, categoria, nombre, precio, descripcion, id) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      imagen,
      categoria,
      nombre,
      precio,
      descripcion,
      id: uuid.v4()
    })
  });
}

const eliminarProducto = (id) => {
  //al la url le agrego Backtick para poder enviar el id del producto a eliminar
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE"
  })
}

const editarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
    respuesta.json()
  );
}

const actualizarProducto = (imagen, categoria, nombre, precio, descripcion, id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ imagen, categoria, nombre, precio, descripcion, id })
  })
    .then(respuesta)

    .catch((error) => (error));

}


export const productosService = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  editarProducto,
  actualizarProducto,
  verProductos,
  //verImagen,
};



