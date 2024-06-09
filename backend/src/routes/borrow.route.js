import { Router } from "express"; 
import { borrowController } from "../controllers/borrowBook.controllers.js";

const borrowRouter = Router()

borrowRouter.route("/borrows").post(borrowController)

export default borrowRouter