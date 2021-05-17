// import { videos } from "../db";
import routes from "../routes";
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  // const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;
  return res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// export const videos = (req, res) =>
//   res.render("videos", { pageTitle: "Videos" });
export const getUploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload Video" });
export const postUploadVideo = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video, create new video id, redirect to new video detail page
  res.redirect(routes.videoDetail(234373));
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
