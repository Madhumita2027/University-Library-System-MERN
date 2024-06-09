import { Router } from "express"; 
import { studentController } from "../controllers/student.controllers.js";

const studentRouter = Router()

studentRouter.route("/students").post(studentController)

export default studentRouter