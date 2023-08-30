const {Router} = require ("express");
const router = Router();
const booksCtrl = require("../controller/book.controller");

router.get("/", booksCtrl.getStart);

router.get("/books", booksCtrl.getBook);

router.get("/books/:id", booksCtrl.getBookParams); //http://localhost:4000/books/2

// router.get("/books", booksCtrl.getBookQuery); // http://localhost:4000/books?id_book=2

router.post("/books", booksCtrl.postBook);

router.put("/books", booksCtrl.putBook);

router.delete("/books", booksCtrl.deleteBook);

module.exports = router;