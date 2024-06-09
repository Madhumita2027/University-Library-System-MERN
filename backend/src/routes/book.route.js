import { Router } from "express"; 
import { bookController } from "../controllers/book.controllers.js";
import { Book } from "../models/book.models.js";

const bookrouter = Router()

// route to save book details into db
bookrouter.route("/books").post(bookController)

// route to get all books form db
bookrouter.get("/books", async(req, res) => {
    try {
        const books = await Book.find({});
        return res
        .status(200)
        .json({
            count: books.length,
            data: books
    });
    } catch (error) {
        console.log(error.message);
        return res
        .status(500)
        .send({ message: error.message })
        }
  })
  
// route to get one book from db by id
bookrouter.get("/books/:id", async(req, res) => {
    try {
      const { id } = req.params;
  
      const book = await Book.findById(id);
  
      return res
      .status(200)
      .json(book);
      
    } catch (error) {
      console.log(error.message);
      res
      .status(500)
      .send({ message: error.message });
    }
  })
  
// route for update a book
bookrouter.put("/books/:id", async(req, res) => {
    try {
      if( !req.body.title ) {
        return res
        .status(400)
        .send({ message: "Send all required fields"})
      }
  
      const { id } = req.params;
      const updateBook = await Book.findByIdAndUpdate(id, req.body);
  
      if(!updateBook) {
        return res
        .status(400)
        .json({ message: "Book not found"})
      }
  
      return res
      .status(200)
      .json({ message: "Book updated successfully"})
      
    } catch (error) {
      console.log(error.message);
      res
      .status(500)
      .send({ message: error.message })
    }
  })
    
// delete a book
bookrouter.delete("/books/:id", async(req, res) => {
    try {
      const { id } = req.params;
      const deleteBook = await Book.findByIdAndDelete(id);
  
      if(!deleteBook) {
        return res
        .status(400)
        .json({ message: "Book with the id not found"})
      }
  
      return res
      .status(200)
      .json({ message: "Book deleted successfully"})
      
    } catch (error) {
      console.log(error.message);
      return res
      .status(500)
      .send({ message: error.message})
    }
  })
  


export default bookrouter
