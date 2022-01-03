
const{crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');
console.clear();


 
crearArchivo(argv.b, argv.l, argv.h)
            .then( nombreArchivo =>                    
                     console.log(`${nombreArchivo} creado` .green)
                        )
            .catch(err=>                 
                     console.log(err)
                          );
        
        // const  num = 16;
        
        //  console.log('base: yargs', argv.base);
        //  const [, , arg3 = 'num=5'] = process.argv;
        //  const[, num=5]= arg3.split('=')
        //  console.log(num);