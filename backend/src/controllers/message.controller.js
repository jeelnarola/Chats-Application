import User from "../models/user.model.js";

export const getUserInuserid = async(req,res)=>{
    try {
        const loggedIdUserId = req.user._id;
        const filteredUsers = await User.find({ _id : {$ne:loggedIdUserId}}).select("-password")
        res.status(200).json({user:filteredUsers})
    } catch (error) {
         console.log("message Controller from getUserInuserid Function Error :- ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}