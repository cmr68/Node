const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
// const writeAndRead = require('./writeAndReadObjetct');

function readConsole(callback){
    const rl = readline.createInterface({input, output}); // guardamos el módulo readline en una variable
    let name, surname, age;
    rl.question('¿Cual es su nombre? ', answer =>{
        name = answer;
        rl.question('¿Cual es su apellido? ', answer =>{
            surname = answer;
            rl.question('¿Cuántos años tiene? ', answer =>{
                age = answer;
                rl.close();

                let object = {name, surname, age};
                callback(object)
            });
        });
    });
}

// readConsole(console.log);

module.exports = readConsole;