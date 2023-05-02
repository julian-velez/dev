const personajes = ['goku','vegeta', 'trunks'];

const [, ,  p3 ] = personajes;

console.log(p3);


const retornoArreglo = () => {
    return ['ABC',123]
}

const [letras, numeros ] = retornoArreglo();

console.log(letras, numeros)

//tarea 
const usestate = ( valor ) => {
    return  [ valor, ()=>{ console.log('hola mundo') }];
}


const [ nombre, setNombre ] = usestate( 'goku' );

//arr[1]();

console.log( nombre );
setNombre();