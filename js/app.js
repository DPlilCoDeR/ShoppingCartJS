const listaCursos = document.querySelector('#lista-cursos');

listaCursos.addEventListener('click', cargarCarrito);

function cargarCarrito(event) {
    if (event.target.classList.contains('agregar-carrito')) {
        console.log(event.target.parentNode);
        console.log(`Agregado al carrito ${event}`);
    }
}