import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("users"));
userRouter.get(routes.userDetail, (req, res) => res.send("user detail"));
userRouter.get(routes.editUser, (req, res) => res.send("edit user"));

export default userRouter;
