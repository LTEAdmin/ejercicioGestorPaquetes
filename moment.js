import moment from "moment";
//locale permite cambiar el idioma de moment a españo u otro, el idioma por defecto es el ingles
moment.locale('es');

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"))
console.log(moment().format("h:mm:ss a")   )
console.log(moment().format("dd-MM-YYYY, h:mm:ss a"))
