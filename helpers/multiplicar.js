const fs = require('fs');

const crearArchivo = async(num,listar = false, hasta = 10) =>{
   
    try{
        let salida = '';
        for(let i = 1; i<=hasta; i++){
            salida += (`${num} X ${i} = ${num*i}\n`)
        }

        if(listar){
            console.log(salida .bgRed) 
        }
         
        
        
        fs.writeFileSync(`./salida/tabla-${num}.txt`,salida)
        return `tabla- ${num}.txt,`;
    }
    catch(error){
            throw error;
    } 
     
  


// fs.writeFile(`tabla-${num}.txt`, salida, (err)=>{
//     if(err) throw err;

//     console.log(`tabla- ${num}.txt creado`)
// })
 

}

module.exports = 
{
    crearArchivo
}