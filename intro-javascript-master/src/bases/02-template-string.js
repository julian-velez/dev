



const nombre = 'julian';
const apellido = 'velez g';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre  } ${ apellido } `;



console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'hola ' + nombre;
}

console.log(` este es un texto : ${  getSaludo( nombre ) } `);