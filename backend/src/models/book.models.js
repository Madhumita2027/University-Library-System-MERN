import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    ISBN: {
        type: String,
        unique: true
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    publisher: {
        type: String,
    },
    genre: {
        type: String,
    },
    publicationDate: {
        type: Date,
    },
});

export const Book = mongoose.model('Book', bookSchema);
