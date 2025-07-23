import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getUserInuserid } from "../controllers/message.controller.js";
export  const messageRoute = Router()

messageRoute.get("/users",protectRoute,getUserInuserid)
