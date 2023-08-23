const fs = require('fs');

function writeAndRead(path,obj){
    const content = JSON.stringify(obj);

    //escribimos el fichero
    fs.writeFile(path, content, err => {
        if(err){
            console.error(err);
        }
        console.log("objeto guardado en " + path);

        //lee el archivo
        fs.readFile(path, 'utf8', (err,data) => {
            if(err){
                console.error(err);
                return;
            }
            console.log("Contenido del archivo ",data);
        });
    });
}

module.exports = writeAndRead;