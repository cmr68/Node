const Book = require('../models/book');
let newBook = null;

function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

function getBook(request, response){
    let respuesta;
    if(newBook != null){
        respuesta = {error: false, codigo: 200, data: newBook}
    }else{
        respuesta = {error: true, codigo: 200, mensaje: "No hay libros registrados"};
    }
    response.send(respuesta);
}

function postBook(request,response){
    let respuesta;
    console.log(request.body);
    if(newBook === null){
        newBook = new Book (request.body.id_book,
                            request.body.id_user,
                            request.body.title,
                            request.body.type,
                            request.body.author,
                            request.body.price,
                            request.body.photo);
                
        respuesta = {error: false, codigo: 200,
                     mensaje: 'Book creado', data: newBook};
    }else{
        respuesta = {error: false, codigo: 200, 
                     mensaje: 'Book ya existe'};
    }
    response.send(respuesta);
}

function putBook(request,response){
    let respuesta;
    if(newBook != null){
        newBook.id_book = request.body.id_book;
        newBook.id_user = request.body.id_user;
        newBook.title = request.body.title;
        newBook.type = request.body.type;
        newBook.author = request.body.author;
        newBook.price = request.body.price;
        newBook.photo = request.body.photo;

        respuesta = {error: false, codigo: 200, mensaje: 'Book actualizado',data: newBook};
    }else{
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe',data: newBook};
    }
    response.send(respuesta);
}

function deleteBook(request,response){
    let respuesta;
    if(newBook != null){
        newBook = null;
        respuesta = {error: false, codigo: 200, mensaje: 'Book borrado', data:newBook}
    }else{
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', data:newBook};
    }
    response.send(respuesta);
}

module.exports = {getBook, getStart, postBook, putBook, deleteBook};