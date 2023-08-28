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
        persona.surname = await pregunta('Apellido? ')
        persona.age = await pregunta('Años? ')

        await fs.writeFile('persona.json',JSON.stringify(persona));
        let read = await fs.readFile('persona.json','utf8')

        console.log(JSON.parse(read));
    }catch(error){
        console.log(error);
    }
}
asyncAwait();