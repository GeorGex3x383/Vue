interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}


export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
}

//const{age, name, power = 'No tiene poder'} = person;
//console.log({age, name, power});

interface CreateHeroeArgs{
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

const createHeroe = ({name, age, codeName, power}: CreateHeroeArgs) => ({
    id: 1234,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})

console.log(createHeroe(person));