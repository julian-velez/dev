// funciones 

const saludar = function ( nombre ) {
    return `hola, ${ nombre }`;
}

const saludar2 =  ( nombre ) => {
    return `hola, ${ nombre }`;
}

const saludar3 =  ( nombre ) => `hola, ${ nombre }`;
const saludar4 =  () => `hola mundo`;




//saludar = 30 

//console.log(saludar('julian'));

console.log(saludar2('vegeta') );
console.log(saludar3('goku'));
console.log(saludar4());


const getUser = () => 
     ({
        uid:'ABC123',
        username:'julianvelez'
    })


const user = getUser();
console.log(user);

//tarea 
// 1. transformen a una funcion flecha
// 2. retornar un objeto implicito ({})
// 3 pruebas

const  getUsuarioActivo = ( nombre ) => 
   ({
        uid:'ABC567',
        username:nombre
    })


const usuarioActivo = getUsuarioActivo('julian');
console.log(usuarioActivo);