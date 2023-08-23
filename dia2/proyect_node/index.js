const writeAndRead = require('./writeAndRead');
const asyncAwait = require('./readConsole');

//Probando writeAndRead
// writeAndRead('writeAndRead.json',{ciudad:"Toledo",numero:8});

let path = './mifichero.json';

async function readConsole(){
    const obj = await asyncAwait();
    await writeAndRead(path,obj)
}

readConsole();