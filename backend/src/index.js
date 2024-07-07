import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";
import bookrouter from "./routes/book.route.js";
import studentRouter from "./routes/student.route.js";
import borrowRouter from "./routes/borrow.route.js";


dotenv.config({
  path: './.env'
})


const app = express();


// Middleware for handling CORS policy
// app.use(cors({
//   origin: process.env.CORS_ORIGIN,
//   credentials: true
// }))
app.use(cors())

// Middleware for parsing request body
app.use(express.json());



// Routes
// Define routes for CRUD operations for each model (Books, Students, BorrowingRecords)
app.use("/v1", bookrouter)
app.use("/v1", studentRouter)
app.use("/v1", borrowRouter)



connectDB()
.then( () => {
  app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT}`));
})
.catch( (err) => console.log("MongoDB connection FAILED", err))
