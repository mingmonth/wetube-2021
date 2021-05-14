import express from "express";
import {
  chanagePassword,
  editUser,
  userDetail,
  users,
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.editUser, editUser);
userRouter.get(routes.changePassword, chanagePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
