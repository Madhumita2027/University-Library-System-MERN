import mongoose from "mongoose"

const publisherSchema = new mongoose.Schema(
    {
        publisherName: {
            type: String
        },
        address: {
            type: String
        },
        contact: {
            type: Number
        }
    }
)


export const Publisher = mongoose.model("Publisher", publisherSchema)