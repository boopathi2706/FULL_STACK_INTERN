import mongoose from "mongoose";

export let connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected..")
    } catch (error) {
        console.log(`Database connection fail : ${error}`)
    }
}