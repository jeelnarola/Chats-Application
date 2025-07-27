import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getMessage, getUserInuserid, sendMessage } from "../controllers/message.controller.js";

 const messageRoute = Router()

messageRoute.get("/users",protectRoute,getUserInuserid)
messageRoute.get("/:id",protectRoute,getMessage)
messageRoute.post("/send/:id",protectRoute,sendMessage)

export default messageRoute



