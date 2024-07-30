import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
import path from "path"
import cors from 'cors';
import connectDB from "./configs/database.js"
import routes from './router.js';
connectDB()
//ExpressJS Power
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
