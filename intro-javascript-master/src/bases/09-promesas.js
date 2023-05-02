import heroes from './Data/heroes';
import { getHeroeById } from './bases/08-import';


//const promesa = new Promise((resolve, reject) => {
  //setTimeout(() => {
    //tarea
    //importen el
   // const p1 = getHeroeById(2);
    //console.log(heroe);
    //resolve( p1 );
    //resolve(p1);
 // }, 2000);
//});

//promesa.then( (heroe) => {
  //console.log('heroe',heroe);
//})

///.catch(err => console.warn(err))


const getHeroeByIdAsync = ( id ) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //tarea
      //importen el
      const p1 = getHeroeById(id);
       if(p1) {
         resolve( p1 );

       }else {
         reejct('no se pudo encontrar el heroe');

       }
      //console.log(heroe);
    }, 2000);
  });
  
}
 
getHeroeByIdAsync(10)
.then( console.log)
.catch(console.warn)