const fs = require('fs');
//Colores para mostrar en consola el texto
const colors = require('colors');

/* Funcion que guarda en un archivo la tabla de multiplicar del <base>*/
const crearArchivo = async (base = 1, listar = false, hasta = 10) =>{
    try {
        let salida = '', consola = '';

        salida += `=================\n  Tabla del ${base}\n=================\n`;
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.yellow(base)} ${'x'.green} ${colors.yellow(i)} ${'='.green} ${ colors.yellow(base * i) }\n`;
        }

        //Muestra la salida si se indica
        if (listar) {
            console.log('=============='.green);    
            console.log('Tabla del'.green, colors.yellow(base));    
            console.log('=============='.green);    
            console.log(consola);    
        }

        // Crea un archivo txt
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        return `./salida/tabla-${base}.txt`;
    } catch (error) {
        if (error.errno === -4048) {    //No puede sobreescribir el archivo si ya existe
            throw `Error: El archivo tabla-${base} esta en modo Solo Lectura.`.red;
        } 
        throw error;
    }
};

//Sirve para exportar la funcion crearArchivo a otros archivos de JS
module.exports = {
    crearArchivo
};