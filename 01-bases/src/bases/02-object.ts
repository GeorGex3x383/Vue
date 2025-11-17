export const person = {
    lastName: 'Stark',
    age: 45,
    adress: {
        city: 'New York',
        zip: 51323,
        lat: 14.4654,
        lng: 60.7894
    }
} //as const;

//const person2 = {...person, adress:{...person.adress}};
const person2 = structuredClone(person)

person2.lastName = 'Parker'
person2.adress.city = 'LA'

console.log(person)
console.log(person2)