import express from "express";
import { join, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home); // video
globalRouter.get(routes.join, join); // user
globalRouter.get(routes.login, login); // user
globalRouter.get(routes.logout, logout); // user
globalRouter.get(routes.search, search); // video

export default globalRouter;
