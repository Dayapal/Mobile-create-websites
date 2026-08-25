import express from 'express';
import cors from 'cors'
import database from './config/database.js';
import { mobileRoute } from './routes/mobile.route.js';
import { userRoute } from './routes/user.route.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

database();
const PORT = process.env.PORT;
app.use(cors({
        origin:"https://mobile-create-websites-mobiles.onrender.com"
    }))
app.use(express.json())
app.use("/", mobileRoute)
app.use("/", userRoute)

app.get("/", (req,res) =>{
    res.send("<h1> I am Server Page </h1>")
})
app.use((req,res) =>{
    res.send("Page Not Found")
})

app.listen(PORT, () =>{
    console.log("Your server is running on port 3000")
})


// npm i bcrypt  
// npm i jsonwebtoken 
// npm install bcryptjs