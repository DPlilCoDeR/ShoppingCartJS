const listaCursos = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#carrito')

ejecutaEventListener();

function ejecutaEventListener() {
    listaCursos.addEventListener('click', cargarCarrito);
}

function cargarCarrito(event) {
    event.preventDefault();
    if (event.target.classList.contains('agregar-carrito')) {
        let curso = event.target.parentElement.parentElement;
        leeDatosCurso(curso)
    }
}

function leeDatosCurso(curso) {
    const dataCurso = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').innerText,
        precio: curso.querySelector('.precio span').innerText
    }
    console.log(dataCurso)
}