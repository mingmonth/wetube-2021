import express from "express";
import { editUser, userDetail, users } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editUser, editUser);

export default userRouter;
