const persona = {
  nombre: 'julian',
  apellido: 'velez',
  edad: 26,
  direccion: {
    ciudad: 'new york ',
    zip:213145,
    lat:14.4545,
    lng:56.987865
  }
};

//console.table( { persona } );


const persona2 = { ...persona };
persona.nombre = 'eduar'

console.log( persona );
console.log(persona2);