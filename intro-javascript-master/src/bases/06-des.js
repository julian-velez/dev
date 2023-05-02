// desestructuracion 

const persona = {
    nombre: 'aleja',
    edad:30,
    clave:'aleja12'
    
};

//const { nombre,edad,clave} = persona;


//console.log(nombre);
//console.log(persona.edad);
//console.log(persona.clave);

const useContext = ( { clave, nombre,edad,rango = 'capitan' } ) => {
   
    //console.log( nombre, edad, rango );
    return {
        nombreClave:clave,
        anios:edad,  
        latlng: {
           lat:43.5456,
           lng:-56.5768
        }
    }
}

const { nombreClave, anios, latlng:{lat,lng }  } = useContext( persona ); 

console.log(nombreClave, anios)
console.log(lat, lng);