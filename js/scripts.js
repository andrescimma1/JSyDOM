// querySelector
const heading = document.querySelector('.header__texto h2');  // Retorna 0 o 1 elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');


// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);



// Eventos

// console.log(1);

// window.addEventListener('load', function() // load espera a que JS y los archivos que
// {                                          // dependen de HTML estén listos.
//     console.log(2);
// });

// window.onload = function() // load espera a que JS y los archivos que
// {                                          // dependen de HTML estén listos.
//     console.log(3);
// };

// document.addEventListener('DOMContentLoaded', function() // Solo espera por el HTML, pero
// {                                                        //  no espera a CSS o imagenes.   
//     console.log(4);
// });


// console.log(5);

// window.onscroll = function(event)
// {
//     console.log(event);
// }


// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(event)
// {
//     console.log(event);
//     event.preventDefault();  // Sirve para que no se recargue la página

//     // validar un formulario

//     console.log('enviando formulario');
// });


// Eventos de los input y textarea
const datos = 
{
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);

email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);

// El evento de submit

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();

    // Validar el formulario
    const {nombre, email, mensaje} = datos;
    
    if(nombre === '' || email === '' || mensaje === '')
    {
        mostrarAlerta('Todos los campos son obligatorios', true);
    
        return; // Corta la ejecución del código
    }
    else
    {
        mostrarAlerta('El formulario se envió correctamente');
    }

    // Enviar el formulario

    console.log('Enviando formulario');
});

function leerTexto(e)
{
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;


    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null)
{
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error)
    {
        alerta.classList.add('error');
    }
    else
    {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparece después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}