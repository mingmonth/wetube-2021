// import { videos } from "../db";
import Video from "../models/Video";
import routes from "../routes";

// export const home = (req, res) => {
//   res.render("home", { pageTitle: "Home", videos });
// };

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    // throw Error("lalala");
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
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
export const postUploadVideo = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  console.log(path);

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  // console.log(body, file);
  // To Do: Upload and save video, create new video id, redirect to new video detail page
  res.redirect(routes.videoDetail(newVideo.id));
  // res.render("uploadVideo", { pageTitle: "Upload Video" });
};

export const getEditVideo = async (req, res) => {
  // console.log(req.params);
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("editVideo", { pageTitle: "Edit Video", video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    body: { title, description },
    params: { id },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const videoDetail = async (req, res) => {
  // console.log(req.params);
  const {
    params: { id },
  } = req;
  // find...
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
  // res.render("deleteVideo", { pageTitle: "Delete Video" });
};
