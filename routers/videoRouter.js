import express from "express";
import {
  deleteVideo,
  editVideo,
  uploadVideo,
  videoDetail,
  videos,
} from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.uploadVideo, uploadVideo);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
