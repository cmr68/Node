const { request, Router } = require('express');
const express = require('express');
const { get } = require('express/lib/response');
const app = express();

app.get("/", function(request, response){
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    console.log("Petición recibida cliente");
    // response.send("Petición recibida cliente");

    // next();
})

app.listen(3000)