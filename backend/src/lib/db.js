import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
export const database = async(req,res) =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DatBase Connecting succesfully ....");
        
    } catch (error) {
        console.log("DataBase Connect Error :- ",error);
        res.status(500).json({ error: "Internal Server Error" });

    }
}