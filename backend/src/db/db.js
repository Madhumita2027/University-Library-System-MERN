import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";


// const connectDB = async () => {
//         const connectionResponse = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//           .then(() => console.log(`MongoDB Connected... DB HOST: ${connectionResponse.connection.host}`))
//           .catch(err => console.log('MongoDB connection failed!!!', err));
// }

const connectDB = async () => {
    try{
        const connectionResponse =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionResponse.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed");
        process.exit(1);
    }
}


export default connectDB