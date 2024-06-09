import mongoose from "mongoose"

const authorSchema = new mongoose.Schema(
    {
        authorName: {
            type: String
        },
        biography: {
            type: String
        },
        bookWritten: {
            type: String
        }
    }
)


export const Author = mongoose.model("Author", authorSchema)