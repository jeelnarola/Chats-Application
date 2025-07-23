import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routers/auth.route.js';

dotenv.config()

const {PORT} = process.env
const app = express();

app.use("/api/auth",authRoutes)
app.listen(PORT,()=>{
    console.log(`Servet Start :- http://localhost:${PORT}/`);
})