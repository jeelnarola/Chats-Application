import jwt from 'jsonwebtoken'
import cookie from 'cookie'
export const generateToken = async(userId,res)=>{
    try {
        const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'7d'})

       res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
        return token;
    } catch (error) {
        console.log("utils Controller from generateToken Function Error :- ",error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

