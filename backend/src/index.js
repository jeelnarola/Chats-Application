import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import authRoutes from './routers/auth.route.js';
import cookie from 'cookie-parser'
import { database } from './configs/database.connect.js';
import { messageRoute } from './routers/message.route.js';
import cors from 'cors'
dotenv.config()

const {PORT} = process.env
const app = express();
app.use(express.json())
app.use(express.urlencoded({extends:true}))
app.use(cookie())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoute)



app.listen(PORT,()=>{
    console.log(`Servet Start :- http://localhost:${PORT}/`);
    database()
})