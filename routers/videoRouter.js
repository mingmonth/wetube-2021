import express from "express";
import {
  deleteVideo,
  getEditVideo,
  getUploadVideo,
  videoDetail,
  videos,
  postEditVideo,
  postUploadVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

// videoRouter.get(routes.home, videos);
videoRouter.get(routes.uploadVideo, getUploadVideo);
videoRouter.post(routes.uploadVideo, uploadVideo, postUploadVideo);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
