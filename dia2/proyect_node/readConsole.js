const fs = require('fs/promises');
const readline = require('readline');

function pregunta(pregunta){
    const question = new Promise((resolve,reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

async function asyncAwait (){
    let persona = {nombre:"", surname:"", age:0};
    try{
        persona.nombre = await pregunta('¿Nombre? ')
        persona.surname = await pregunta('¿Apellido? ')
        persona.age = await pregunta('¿Años? ')
        return persona;
        
    }catch(error){
        console.log(error);
    }
}

module.exports = asyncAwait;