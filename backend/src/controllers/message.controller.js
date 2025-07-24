import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import cloudinary from "../utils/cloudinary.js";

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

export const getMessage = async(req,res)=>{
    try {
        const {id:userToChatId} = req.params
        const myId = req.user._id;

        const message = await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId},

            ]
        })
        res.status(200).json({message:message})
    } catch (error) {
       console.log("message Controller from getMessage Function Error :- ", error.message);
        res.status(500).json({ error: "Internal Server Error" }); 
    }
}
export const sendMessage = async(req,res)=>{
    try {
            const {text,image} = req.body;
            const {id:receiverId} = req.params
            let imageurl;

            if(image){
                const uplodResponse = await cloudinary.uploader.upload(image);
                imageurl = uplodResponse.secure_url;
            }

            const newMessage = new Message({
                senderId,
                receiverId,
                text,
                image:imageurl
            })
            await newMessage.save();

            // RealTime Functionality Add soket.io

             res.status(200).json({message:newMessage})
    } catch (error) {
        console.log("message Controller from getMessage Function Error :- ", error.message);
        res.status(500).json({ error: "Internal Server Error" }); 
    }
}