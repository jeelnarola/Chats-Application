import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import { generateToken } from "../utils/utils.js";
import cloudinary from "../utils/cloudinary.js";
export const signup = async (req, res) => {

    const { fullName, email, password } = req.body;

    try {
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at leat 6 characters" });
        }
        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: "Email already exists." });

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newuser = new User({
            fullName,
            email,
            password: hashPassword
        })
        if (newuser) {
            // JWT
            generateToken(newuser._id, res)
            await newuser.save()
            return res.status(200).json({
                message: "Signup succesfully...", user: {
                    ...newuser,
                    password: ""
                }
            })
        } else {
            return res.status(400).json({ message: "Invalid user data" })
        }

    } catch (error) {
        console.log("Auth Controller from Signup Function Error :- ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            // JWT
            return res.status(400).json({ message: "Invalid password" })
        }
        generateToken(user._id, res)
        return res.status(200).json({
            message: "Signup succesfully...", user: {
                ...user._doc,
                password: ""
            }
        })


    } catch (error) {
        console.log("Auth Controller from Login Function Error :- ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("token", "", { maxAge: 0 })
        return res.status(200).json({ message: "Logged out succesfully..." })
    } catch (error) {
        console.log("Auth Controller from Logout Function Error :- ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateProfilePic = async (req, res) => {
    const {profilePic}=req.body;
    try {
        const userId = req.user._id
        if(!profilePic){
            return res.status(400).json({ message: "ProfilePic Is required !" })
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic)

        const updateUser = await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true})
         return res.status(200).json({
            message: "updateUser succesfully...", user: {
                ...updateUser._doc,
                password: ""
            }
        })
    } catch (error) {
        console.log("Auth Controller from updateProfilePic Function Error :- ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const checkAuth =async(req,res)=>{
    try {
        return res.status(200).json({
            message: "Auth Check...", user: {
                ...req.user._doc,
                password: ""
            }
        })
    } catch (error) {
         console.log("Auth Controller from checkAuth Function Error :- ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}