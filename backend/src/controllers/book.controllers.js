import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { Book } from "../models/book.models.js";

const bookController = asyncHandler( async (req, res) => {
    // get book details from frontend
    // validation - required fields not empty
    // if book already exist: _id
    // create book object - create entry in db
    // check for book creation
    // return res


    const { ISBN, title, genre, author, publisher, publicationDate } = req.body

    if(ISBN === "") {
        throw new ApiError(400, "ISBN is required");
    }
    else if(title === "") {
        throw new ApiError(400, "title is required");
    }
    else if(author === "") {
        throw new ApiError(400, "author is required");
    }
    else if(publisher === "") {
        throw new ApiError(400, "publisher is required");
    }


    const book = await Book.create({
        ISBN,
        title,
        genre,
        author,
        publisher,
        publicationDate
    })

    const createdBook = await Book.findById(book._id)

    if(!createdBook) {
        throw new ApiError(500, "Something went wrong while creating the book object")
    }

    return res.status(201).json(
        new ApiResponse(200, createdBook, "Book created Successfully..!!")
    )
})



export {bookController}