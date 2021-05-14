// global
const HOME = "/";
const SEARCH = "/search";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_USER = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// videos
const VIDEOS = "/videos";
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
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  uploadVideo: UPLOAD_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
