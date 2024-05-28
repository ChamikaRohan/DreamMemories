import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import postMessageRoutes from "./routes/postMessageRoutes.js"

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
const DB = process.env.DB_URL;

mongoose.connect(DB)
.then(console.log("Database is connected succesfully!"))
.catch((error)=>console.log("Database connection failed with error: ",error.message));

app.listen( PORT, (console.log(`Server is running on port: ${PORT}`)));

app.use("/api/posts", postMessageRoutes);
