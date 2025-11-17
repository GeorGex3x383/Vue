

//function greetPerson( name: string ){
//    return `Hola, ${name}`;
//}

// const greetPerson = (name:string) =>{
//     return `Hola, ${name}`;
// }

//const greetPerson = (name:string) => `Hola, ${name}`;

// const getUser = (uid: string) =>{
//     return {
//         uid,
//         username: 'Tony001'
//     }
// }

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza',
    },
];

const heroe = heroes.find((h) => h.id === 1);

console.log(heroe?.power?.toUpperCase());