import "./db";
import app from "./app-express";
import dotenv from "dotenv";
import "./models/Video";

dotenv.config();

app.listen(process.env.PORT);
