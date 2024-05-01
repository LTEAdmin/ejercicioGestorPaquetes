//const { v4: uuidv4 } = require('uuid');
//uuidv4();
// si se usa es5 esta es la forma de definir el modulo de uso de uuid

import { v4 as uuidv4 } from 'uuid'; // importa el modulo uuid

// forma normal con 32 caracteres
/* const id = uuidv4();
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
console.log(persona) */

const Usuarios = [];

//la funcion tambien se puede definir de la siguiente forma
//function registrarUsuario(uuidv4().slice(0, 8), name, age, email){} 
//en este caso el id se pasa por parametro
    

function registrarUsuario(name, age, email) {
    const newuser = {
        id: uuidv4().slice(0, 8),
        name,
        age,
        email
    }
    Usuarios.push(newuser);
    console.log(Usuarios);
    return newuser; 
}; 
const usuario1 = registrarUsuario("ale", 25, "ale@ale");
const usuario2 = registrarUsuario("pedro", 25, "pedro@pedro");
const usuario3 = registrarUsuario("jose", 25, "jose@jose"); 
