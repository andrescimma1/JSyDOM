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

console.log(1);

window.addEventListener('load', function() // load espera a que JS y los archivos que
{                                          // dependen de HTML estén listos.
    console.log(2);
});

window.onload = function() // load espera a que JS y los archivos que
{                                          // dependen de HTML estén listos.
    console.log(3);
};

document.addEventListener('DOMContentLoaded', function() // Solo espera por el HTML, pero
{                                                        //  no espera a CSS o imagenes.   
    console.log(4);
});


console.log(5);