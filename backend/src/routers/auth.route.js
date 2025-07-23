import express from 'express'

const authRoutes = express.Router()

authRoutes.get('/signup',(req,res)=>{
    res.send("Signup Route")
})
authRoutes.get('/login',(req,res)=>{
    res.send("login Route")
})
authRoutes.get('/logout',(req,res)=>{
    res.send("logout Route")
})
export default authRoutes