import moment from "moment";
//locale permite cambiar el idioma de moment a españo u otro, el idioma por defecto es el ingles
moment.locale('es');

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"))
console.log(moment().format("h:mm:ss a")   )
console.log(moment().format("dd-MM-YYYY, h:mm:ss a"))

const formato = 'dddd, Do MMMM YYYY, h:mm:ss a';
const hoy = moment();


//permite mostrar una tabla en consola
console.table({
  hoy: hoy.format(formato),
  ayer: hoy.subtract(1, 'days').format(formato),
  manana: hoy.add(1, 'days').format(formato),
  'dos semanas': hoy.add(2, 'weeks').format(formato),
});