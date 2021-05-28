/* Bases de Node.js */

//Importa el archivo multiplicar.js
const { crearArchivo } = require('./helpers/multiplicar');
//Importa el archivo yargs
const argv  = require('./config/yargs');
//Colores para mostrar en consola el texto
const colors = require('colors');

console.clear();    //Limpia la consola

crearArchivo(argv.base, argv.listar, argv.ha)  
    .then( nombreArchivo => console.log('Se creó el archivo:'.blue, nombreArchivo.green) )
    .catch( error => console.log( error) );