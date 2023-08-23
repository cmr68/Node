const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
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
            console.log(object);
            const content = JSON.stringify(object);

            //****** WRITE FILE ******//
            fs.writeFile('data.json', content, err => {
            if (err) {
                console.error(err);
            }
            console.log("Objeto guardado en data.json");
            // file written successfully
            });

            //****** READ FILE ******//
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) {
                console.error(err);
                return;
                }
                console.log(data);
            });
        });
    });
});