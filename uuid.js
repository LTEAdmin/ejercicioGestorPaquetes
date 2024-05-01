//const { v4: uuidv4 } = require('uuid');
//uuidv4();
// si se usa es5 esta es la forma de definir el modulo de uso de uuid

import { v4 as uuidv4 } from 'uuid'; // importa el modulo uuid

// forma normal con 32 caracteres
const id = uuidv4();
// forma de recortar el id, valor inicial y valor final
const id2 = uuidv4().slice(0, 15);
console.log(id);
console.log(id2);
console.log(uuidv4());  

// forma de definir id en un objeto, ojo cada vez que se ejecuta crea un id distinto, tener cuidado de no ingresar dos veces a una persona con el id distinto
const persona = {
    id: uuidv4().slice(0, 8),
    name: "Alejandra",
    age: 25,
}
console.log(persona)
