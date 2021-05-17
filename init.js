import "./db";
import app from "./app-express";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT);
