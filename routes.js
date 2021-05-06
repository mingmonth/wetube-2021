// global
const HOME = "";
const SEARCH = "/search";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// users
const USERS = "";
const USER_DETAIL = "/:id";
const EDIT_USER = "/:id/edit";

// videos
const VIDEOS = "";
const UPLOAD_VIDEO = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  search: SEARCH,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,
  userDetail: USER_DETAIL,
  editUser: EDIT_USER,
  videos: VIDEOS,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  uploadVideo: UPLOAD_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
