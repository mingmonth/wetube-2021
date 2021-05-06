import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("videos"));
videoRouter.get(routes.uploadVideo, (req, res) => res.send("upload video"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("video detail"));
videoRouter.get(routes.editVideo, (req, res) => res.send("edit video"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("delete video"));

export default videoRouter;
