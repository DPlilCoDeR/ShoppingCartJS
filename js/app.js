const listaCursos = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#carrito')
const listaCarrito = document.querySelector('#lista-carrito tbody')

ejecutaEventListener();

function ejecutaEventListener() {
    listaCursos.addEventListener('click', seleccionarCurso);
}

function seleccionarCurso(event) {
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
        precio: curso.querySelector('.precio span').innerText,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    creaFilaDataCursoCarrito(dataCurso);
}

function creaFilaDataCursoCarrito(curso) {
    const filaCurso = document.createElement('tr');
    filaCurso.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100px">
        </td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>
            <a href='#' class='borrar-curso' data-id=${curso.id} >X</a>
        </td>
    `;
    listaCarrito.append(filaCurso);
}