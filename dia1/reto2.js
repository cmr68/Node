const fs = require('fs');

let object = { name:"Cristina", surname:"Muñoz", age: 29};

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


