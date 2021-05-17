import express from "express";
import {
  deleteVideo,
  editVideo,
  getUploadVideo,
  videoDetail,
  videos,
  postUploadVideo,
} from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

// videoRouter.get(routes.home, videos);
videoRouter.get(routes.uploadVideo, getUploadVideo);
videoRouter.post(routes.uploadVideo, postUploadVideo);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
