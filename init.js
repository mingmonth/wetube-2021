import "./db";
import app from "./app-express";
import dotenv from "dotenv";
import "./models/Video";
import "./models/Comment";

dotenv.config();

app.listen(process.env.PORT);
