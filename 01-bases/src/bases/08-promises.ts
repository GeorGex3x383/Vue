

// console.log('Inicio');

import type { Hero } from "../data/heroes";
import { getHeroeById } from "./07-imp-exp";


// new Promise( ( resolve, reject ) => {
//     //console.log('Cuerpo de la promesa');
//     setTimeout(()=>{
//         //resolve('Mi amigo cumplio')
//         reject('Mi amigo no cumplio');
//     }, 1000);

// }).then( ( message ) => console.log(message) )
// .catch(errorMessage=>console.log(errorMessage))
// .finally(()=>console.log('Fin de la promesa'));


// console.log('Final');

const getHeroByAsync = (id: number):Promise<Hero> => {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            
        const hero = getHeroeById( id );


        hero ? resolve(hero): reject(`Heroe no encontrado #${id}`);
        },1500);
    })

}

getHeroByAsync(1)
.then(hero => console.log('El nombre es', hero.name))
.catch(alert)