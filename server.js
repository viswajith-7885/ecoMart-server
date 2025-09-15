import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoute from './routes/authRoutes.js'
import productRouter from './routes/productRoutes.js'
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json())
app.use(cors());


//Routes

app.get("/",(req,res)=>{
  res.send("hellow world")
})

app.use("/api/auth",authRoute)
app.use('/api/products',productRouter)
//DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//
app.listen('4000',()=>{
console.log("server is running");
})