const  { writeFileSync } = require('fs');
const colors = require('../colors/config');

const crearArchivo = async (base = 5, list = false, begin = 1, end = 10) =>{
    try{
        
        //Info
        salida = '';
        salida += "========================\n";
        salida += `\tTabla del ${base}\n`
        salida += "========================\n";

        //Create the table
        for(let x=begin; x<=end; x++){
            salida +=`${base} x ${x} = ${base*x} \n`
        }
        
        //Argv list true
        if(list){
            console.log(colors.verbose(salida));
        }

        //Write txt
        writeFileSync(`${process.cwd()}\\output\\tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`
    }
    catch(err){
        throw Error(err);
    }

}

module.exports = {
    crearArchivo
}