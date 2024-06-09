import { Router } from "express"; 
import { publisherController } from "../controllers/publisher.controllers.js";

const publisherRouter = Router()

publisherRouter.route("/publishers").post(publisherController)

export default publisherRouter