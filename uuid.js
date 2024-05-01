//const { v4: uuidv4 } = require('uuid');
//uuidv4();
// si se usa es5 esta es la forma de definir el modulo de uso de uuid

import { v4 as uuidv4 } from 'uuid'; // importa el modulo uuid

const id = uuidv4();
console.log(id);
console.log(uuidv4());
console.log(uuidv4());      