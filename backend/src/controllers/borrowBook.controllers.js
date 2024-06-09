import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { Borrow } from "../models/borrowBook.models.js";

const borrowController = asyncHandler( async (req, res) => {
    
    const { student, grade, borrowedBookTitle, borrowingDate, returnDate, fine } = req.body

    if(student === "") {
        throw new ApiError(400, "Student name is required");
    }
    else if(grade === "") {
        throw new ApiError(400, "Book name is required");
    }
    else if(borrowedBookTitle === "") {
        throw new ApiError(400, "Book name is required");
    }
    else if(borrowingDate === "") {
        throw new ApiError(400, "Borrowing Date is required");
    }
    else if(returnDate === "") {
        throw new ApiError(400, "Return Data is required");
    }


    const borrow = await Borrow.create({
        student,
        grade,
        borrowedBookTitle,
        borrowingDate,
        returnDate,
        fine
    })

    const createdBorrowBook = await Borrow.findById(borrow._id)

    if(!createdBorrowBook) {
        throw new ApiError(500, "Something went wrong while creating the borrow book object")
    }

    return res.status(201).json(
        new ApiResponse(200, createdBorrowBook, "Borrow details entered Successfully..!!")
    )
})



export {borrowController}