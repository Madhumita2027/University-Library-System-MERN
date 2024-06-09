import { Router } from "express"; 
import { authorController } from "../controllers/author.controllers.js";

const authorRouter = Router()

authorRouter.route("/authors").post(authorController)

export default authorRouter