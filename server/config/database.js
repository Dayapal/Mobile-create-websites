import mongoose from "mongoose";

const database = async() =>{
    try {
         mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongodb connected successfully")
    } catch (error) {
        console.log("Failed to conneted mongodb", error.message)
        process.exit(1)
        
    }
}

export default database;

