import User from "../models/user.model.js";

export const allUser = async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).json({user:users})
    } catch (error) {
         console.log("User Controller from allUser Function Error :- ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}