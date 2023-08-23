const writeAndRead = require('./writeAndReadObjetct');
const readConsole = require('./readConsole');

// writeAndRead('./miFichero.json', {calle: "Teruel", numero: 8});

let path = './mifichero.json';

readConsole (obj => {
    writeAndRead(path,obj);
});