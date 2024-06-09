import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {    
        studentName: {
            type: String
        },
        email: {
            type: String,
            unique: true,
            lowecase: true,
            trim: true 
        },
        contact: {
            type: Number
        },
        address: {
            type: String
        }
    })


export const Student = mongoose.model("Student", studentSchema)