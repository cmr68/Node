const express = require("express");
let cors = require("cors");
const app = express();
const bookRouters = require("./routers/book.routers");
const errorHandling = require("./error/errorHandling");

app.use(cors());

app.set("port", process.env.PORT || 4000)

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bookRouters);
app.use(function(req, res, next){
    res.status(404).json({error:true, codigo: 404, message: "Endpoint doesnt found"})
})
app.use(errorHandling);

module.exports = app;