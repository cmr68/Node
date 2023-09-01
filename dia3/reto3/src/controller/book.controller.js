const Book = require('../models/book');
let newBook = null;
let arrayBook = [
      new Book (10,0,"Primer libro", "Tapa blanda", "Autor1", 20, ""),
      new Book (43464,562,"Segundo libro", "Tapa blanda", "Autor2", 20, "https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/42464-hypp15nz-libro-el-corazon-helado-almudena-grandes-5.jpg"),
      new Book (67884,562,"Tercer libro", "Tapa blanda", "Autor3", 20, ""),
      new Book (31152,562,"Cuarto libro", "Tapa blanda", "Autor3", 20, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigg5lNzYrLCaKM24Vvbwj9dnWsKR63lUiPQ&usqp=CAU")
];

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

function getBookParams(request,response){
    console.log(request.params);
    let id_book = request.params.id;
    console.log(id_book);

    let respuesta;
    let foundBook = false;

    for(let book of arrayBook){
        console.log("book de getBookParams:", book);
        if(id_book == book.id_book){
            console.log("if(id_book = ",id_book," == book.id_book = ",book.id_book,")");

            respuesta = {error: false, codigo: 200, data_book: book};
            console.log();
            foundBook = true;
        }
    }

    if(!foundBook){
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"};
    }

    response.send(respuesta);
}

function getBookQuery(request,response){

    console.log(request.query);
    let id_book = request.query.id_book;
    console.log(id_book);

    let respuesta;
    let foundBook = false;

    for(let book of arrayBook){
        if(id_book == book.id_book){
            respuesta = {error: false, codigo: 200, data: book};
            foundBook = true;
        }
    }

    if(!foundBook){
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"};
    }

    response.send(respuesta);
}

//Añadir nuevo libro 
function postBook(request,response){
    let respuesta;
    let id_book = request.body.id_book;
    console.log(request.body);

    let existingBook = arrayBook.find(book => book.id_book == id_book);

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
    let id_book = request.body.id_book;
    console.log("id_book por parametro en putBook",id_book);
    
    let existingBookIndex = arrayBook.findIndex(book => book.id_book == id_book);
    
    if(existingBookIndex !== -1){
        let existingBook = arrayBook[existingBookIndex];

        let campos = ["id_user", "title", "type", "author", "price", "photo"];

        campos.forEach(campo =>{
            if(request.body[campo] !== undefined && request.body[campo] !== ''){
                existingBook[campo] = request.body[campo];
            }
        })
        respuesta = {error: false, codigo: 200, mensaje: 'Libro actualizado',data: existingBook};
    }else{
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe',data: existingBook};
    }
    response.send(respuesta);
}

function deleteBook(request,response){
    let respuesta;
    let id_book = request.body.id_book;

    let index = arrayBook.findIndex(book => book.id_book == id_book.id_book);
    console.log("id_book",id_book, index,"index");

    if(index !== -1){
        arrayBook.splice(index,1);
        respuesta = {error: false, codigo: 200, mensaje: 'Book borrado', data: arrayBook}
    }else{
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', data_book:id_book};
        console.log("libro no existe");
    }
    response.send(respuesta);

}

module.exports = {getBook, getStart, postBook, putBook, deleteBook, getBookParams, getBookQuery};