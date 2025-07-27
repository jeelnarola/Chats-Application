import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { allUser } from "../controllers/user.controller.js";
export  const userRoute = Router()

userRoute.get("/all",protectRoute,allUser)


