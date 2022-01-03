const { describe, number } = require('yargs');

const argv = require('yargs')
            .option('b', {
            alias : 'base',
            type:'number',
            demandOption: true,
            describe : 'Es la base de la tabla de multiplicar'
        })
        .check((argv, options)=>{
           if(isNaN(argv.b)){
               throw 'La Base Tiene que ser un numero'
           }
           return true;
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe : 'Muestra la Tabla en Consola'
        })
        .option('h', {
            alias: 'hasta',
            type: number,
            default: 10,
            describe : 'Numero limite que llegara la multiplicacion'

        })
        .argv



module.exports= argv;        