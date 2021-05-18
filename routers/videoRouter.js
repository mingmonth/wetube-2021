import express from "express";
import {
  deleteVideo,
  editVideo,
  getUploadVideo,
  videoDetail,
  videos,
  postUploadVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

// videoRouter.get(routes.home, videos);
videoRouter.get(routes.uploadVideo, getUploadVideo);
videoRouter.post(routes.uploadVideo, uploadVideo, postUploadVideo);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
