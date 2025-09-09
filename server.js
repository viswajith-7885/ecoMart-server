import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoute from './routes/authRoutes.js'


const app = express();
dotenv.config();
app.use(express.json())


//Routes

app.use("/api/auth",authRoute)
//DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//
app.listen('4000',()=>{
console.log("server is running");
})