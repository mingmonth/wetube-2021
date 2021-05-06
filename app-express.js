import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => {
  return res.send({ status: "ok" });
};

const handleProfile = (req, res) => {
  return res.send("handle profile2");
};

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("", handleHome);
app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;
