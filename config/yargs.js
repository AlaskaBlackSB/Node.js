const argv = require('yargs')
    //Configuracion de los parametros
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe : 'Base de la tabla de multiplicar.'
    })
    .check( (argv, options) => {
        if (isNaN(argv.b)){
            throw 'Error: El argumento --base debe ser de tipo numérico.';
        }
        return true;
    } )
    .option('ha', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe : 'Fin de la tabla de multiplicar.'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola.'
    })
    .argv;

//Exports por defecto del archivo
module.exports = argv;