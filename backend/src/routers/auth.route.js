import express from 'express'
import { checkAuth, login, logout, signup, updateProfilePic } from '../controllers/auth.controller.js'
import { protectRoute } from '../middlewares/auth.middleware.js'

const authRoutes = express.Router()

authRoutes.post('/signup',signup)
authRoutes.post('/login',login)
authRoutes.post('/logout',logout)

authRoutes.put("/update-profile",protectRoute,updateProfilePic)

authRoutes.get("/check",protectRoute,checkAuth)
export default authRoutes