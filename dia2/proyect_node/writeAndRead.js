const fs = require('fs/promises')

async function writeAndRead(path,obj){
    try{
        await fs.writeFile(path,JSON.stringify(obj));
        // await console.log("Obj guardado en" + path);
        let read = await fs.readFile(path,'utf8');
        console.log("contenido del archivo: ",read);
    }catch(error){
        console.log(error);
    }
}

// writeAndRead('writeAndRead.json',{ciudad:"Toledo",numero:8})

module.exports = writeAndRead;