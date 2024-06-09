import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { Student } from "../models/student.models.js";

const studentController = asyncHandler( async (req, res) => {
    
    const { studentName, email, contact, address } = req.body

    if(studentName === "") {
        throw new ApiError(400, "Student Name is required");
    }
    else if(email === "") {
        throw new ApiError(400, "Email is required");
    }
    else if(contact === "") {
        throw new ApiError(400, "Contact number is required");
    }


    const student = await Student.create({
        studentName,
        email,
        contact,
        address
    })

    const createdStudent = await Student.findById(student._id)

    if(!createdStudent) {
        throw new ApiError(500, "Something went wrong while creating the student object")
    }

    return res.status(201).json(
        new ApiResponse(200, createdStudent, "Student details entered Successfully..!!")
    )
})



export {studentController}