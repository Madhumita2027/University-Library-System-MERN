import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        },
        grade: {
            type: String
        },
        borrowedBookTitle: {
            type: String
        },
        borrowingDate: {
            type: Date,
            default: Date.now
        },
        returnDate: {
            type: Date
        },
        fine: {
            type: Number,
            default: 0
        }
    }
)


export const Borrow = mongoose.model("Borrow", borrowSchema)