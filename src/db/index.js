import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const databaseConnection = await mongoose.connect(`mongodb+srv://Vishal:vishal123@cluster0.oxdix.mongodb.net/${DB_NAME}`)
        console.log(`\n MongoDB Connected ! DB Host: ${databaseConnection.connection.host}`);        
    } catch (error){
        console.error("MONGODB CONNECTION ERROR: ",error);
        process.exit(1);
    }
}

export default connectDB