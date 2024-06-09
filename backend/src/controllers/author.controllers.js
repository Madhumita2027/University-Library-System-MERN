import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { Author } from "../models/author.models.js";

const authorController = asyncHandler( async (req, res) => {

    const { authorName, biography, bookWritten } = req.body

    if(authorName === "") {
        throw new ApiError(400, "Author Name is required");
    }


    const author = await Author.create({
        authorName,
        biography,
        bookWritten
    })

    const createdAuthor = await Author.findById(author._id)

    if(!createdAuthor) {
        throw new ApiError(500, "Something went wrong while creating the author object")
    }

    return res.status(201).json(
        new ApiResponse(200, createdAuthor, "Author details entered Successfully..!!")
    )
})



export { authorController }