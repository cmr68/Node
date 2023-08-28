const Book = require('../models/book');
let newBook = new Book (1, 12, "Libro ejemplo", "tapa blanda", "Anonino", 20, "Foto");
let arrayBook = [newBook];

function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

function getBook(request, response){
    let respuesta;
    if(arrayBook.length > 0){
        respuesta = {error: false, codigo: 200, data: arrayBook}
    }else{
        respuesta = {error: true, codigo: 200, mensaje: "No hay libros registrados"};
    }
    response.send(respuesta);
}

//GET /books?id=5. Obtiene los datos del libro cuyo id coincide con el pasado por parámetro.
function getBookParams(request,response){
    let id_book = request.params.id;
    let foundBook = false;
    for(let book of arrayBook){
        if(id_book === book.id_book){
            response.send({error: false, codigo: 200, data: book});
            foundBook = true;
        }
    }
    if(!foundBook){
        response.send({error: true, codigo: 200, mensaje: "El libro no existe"})
    }
}

//Añadir nuevo libro 
function postBook(request,response){
    let respuesta;
    let id_book = request.body.id_book;
    console.log(request.body);

    const existingBook = arrayBook.find(book => book.id_book === id_book);

    if(existingBook){
        respuesta = {error: true, codigo: 200, mensaje: 'Book ya existe'};
    }else{
        arrayBook.push(newBook = new Book ( request.body.id_book,
                                            request.body.id_user,
                                            request.body.title,
                                            request.body.type,
                                            request.body.author,
                                            request.body.price,
                                            request.body.photo));
        respuesta = {error: false, codigo: 200, mensaje: 'Book creado', data: newBook};
    }
    response.send(respuesta);
}

//Modificar libro
function putBook(request,response){
    let respuesta;
    let id_book = request.params.id_book;
    const existingBookIndex = arrayBook.findIndex(book => book.id_book === id_book);

    if(existingBookIndex !== -1){
        let existingBook = arrayBook[existingBookIndex];
        
        existingBook.id_user = request.body.id_user;
        existingBook.title = request.body.title;
        existingBook.type = request.body.type;
        existingBook.author = request.body.author;
        existingBook.price = request.body.price;
        existingBook.photo = request.body.photo;

        respuesta = {error: false, codigo: 200, mensaje: 'Libro actualizado',data: existingBook};
    }else{
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe',data: existingBook};
    }
    response.send(respuesta);
}

function deleteBook(request,response){
    let respuesta;
    let id_book = request.query.id;
    const index = arrayBook.findIndex(book => book.id_book === id_book);

    if(index !== -1){
        arrayBook.splice(index,1);
        respuesta = {error: false, codigo: 200, mensaje: 'Book borrado', data:arrayBook}
    }else{
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', data:id_book};
    }
    response.send(respuesta);
}

module.exports = {getBook, getStart, postBook, putBook, deleteBook, getBookParams};