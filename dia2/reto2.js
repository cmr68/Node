const fs = require('fs/promises')

let object = { name:"Cristina", surname:"Muñoz", age: 29};

const content = JSON.stringify(object);

fs.writeFile('reto2.json', content).then( () => {
    return fs.readFile('reto2.json', 'utf8')
}).then(data =>{
    console.log(JSON.parse(data));
}).catch(err => {
    console.log(err);
})