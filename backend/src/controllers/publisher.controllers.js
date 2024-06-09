import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { Publisher } from "../models/publisher.models.js";


const publisherController = asyncHandler( async (req, res) => {
    
    const { publisherName, address, contact } = req.body

    if(publisherName === "") {
        throw new ApiError(400, "Publisher Name is required");
    }


    const publisher = await Publisher.create({
        publisherName,
        address,
        contact
    })

    const createdPublisher = await Publisher.findById(publisher._id)

    if(!createdPublisher) {
        throw new ApiError(500, "Something went wrong while creating the publisher object")
    }

    return res.status(201).json(
        new ApiResponse(200, createdPublisher, "Publisher details entered Successfully..!!")
    )
})



export { publisherController }