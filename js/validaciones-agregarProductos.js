
const formAgregarProducto = document.querySelector('#form-agregar-producto');
const imagenProducto = document.querySelector('#agregarImagen');
const imagenMostrar = document.querySelector('#img-arrastrar');
const imagenPrev = document.querySelector("#imagenPrevisualizacion");
const btnAgregar = document.querySelector('#btn-agregar-producto');
const spanImg = document.querySelector('#producto-span-errorImg');
const spanSelect = document.querySelector('#producto-span-select');
const selectCategoria = document.querySelector('#form-categoria'); 
const spanNombre = document.querySelector('#producto-span-nombre');
const spanPrecio =document.querySelector('#producto-span-precio');
const spanDescripcion = document.querySelector('#producto-span-descripcion');
const modalExito = document.querySelector('#modal-exito');

mensajeBienvenidos.style.display = "block";
setInterval(() => {
    mensajeBienvenidos.style.display = "none";
}, 3000); 


const mensajeErroresProductos = {
    
    imagen: "Debe seleccionar una imagen. Solo formato .jpeg, .jpg o .png",
    categoria: "Debe selecionar una categoria",
    nombre: "No puede estar vacio. Minimo 3 letras. Maximo 20 letras",
    precio: "No puede estar vacio. Solo se puede ingresar números",
    descripcion: "No puede estar vacio. Maximo 150 caracteres",
    
}

const pattern = {
    patternImagen: /(.jpg|.jpeg|.png|.gif)$/i,
    patternNombre: /[a-zA-Z]{3,20}/,
    patternPrecio: /[0-9]/,
    patternMensaje: /^[a-zA-Z0-9_ ]{1,150}/
};

const valorCampo = {
    imagen: false,
    categoria: false,
    nombre: false,
    precio: false,
    descripcion: false,
};


console.log(formAgregarProducto.imagen.value)

function validarNuevoProducto(){

    if(!pattern.patternImagen.exec(formAgregarProducto.imagen.value)){
        errorCamposVacios.style.display = "block";
        spanImg.innerHTML = mensajeErroresProductos.imagen;
        formAgregarProducto.imagen.value = "";

    }else{
        spanImg.innerHTML = "";
        valorCampo.imagen = true;
    }

    if(selectCategoria.value === ""){
        errorCamposVacios.style.display = "block";
        spanSelect.innerHTML = mensajeErroresProductos.categoria;
        return focus();
    }else{
        spanSelect.innerHTML = "";
        valorCampo.categoria = true;
    }

    if(!pattern.patternNombre.test(formAgregarProducto.nombre.value)){
        errorCamposVacios.style.display = "block";
        spanNombre.innerHTML = mensajeErroresProductos.nombre;
        return focus();
    }else {
        valorCampo.nombre = true;
        spanNombre.innerHTML = "";
    }

    if(!pattern.patternPrecio.test(formAgregarProducto.precio.value)){
        errorCamposVacios.style.display = "block";
        spanPrecio.innerHTML = mensajeErroresProductos.precio;
        return focus();
    }else{
        valorCampo.precio = true;
        spanPrecio.innerHTML = "";
    }

    if(!pattern.patternMensaje.test(formAgregarProducto.descripcion.value)){
        errorCamposVacios.style.display = "block";
        spanDescripcion.innerHTML = mensajeErroresProductos.descripcion;
        return focus();
    }else{
        valorCampo.descripcion = true;
        spanDescripcion.innerHTML = "";
    }



}

     imagenProducto.addEventListener("change", ()=>{
        const selecionarImagen = imagenProducto.files[0];
        const objectURL = URL.createObjectURL(selecionarImagen);
        imagenPrev.src = objectURL;
    });

    formAgregarProducto.addEventListener("submit" , (e)=>{
        e.preventDefault();

        if(valorCampo.imagen && valorCampo.categoria && valorCampo.nombre && valorCampo.precio && valorCampo.descripcion){

            modalExito.style.display = "block";
            setInterval(() => {
                modalExito.style.display = "none";
            }, 5000); 

            
            formAgregarProducto.reset();
            window.location = "productos.html";
        }
    });

    btnAgregar.addEventListener("click", ()=>{
        validarNuevoProducto();

    });


    /* Modal 
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
  openModalBtn.addEventListener("click", openModal);  


  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  

  closeModalBtn.addEventListener("click", closeModal);

*/


/* drag and drop 
    const dragenter = (e) => {
        e.stopPropagation();
        e.preventDefault();
      }
      const dragover = (e) => {
        e.stopPropagation();
        e.preventDefault();
      }
      const drop = (e) => {
        e.stopPropagation();
        e.preventDefault();
      }    
      imagenProducto.addEventListener("dragenter", dragenter, false);
      imagenProducto.addEventListener("dragover", dragover, false);
      imagenProducto.addEventListener("drop", drop, false);

*/    

