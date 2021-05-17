import routes from "../routes";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  console.log(req.body);
  res.redirect(routes.home);
  // res.render("login", { pageTitle: "Login" });
};

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editUser = (req, res) =>
  res.render("editUser", { pageTitle: "Edit User" });
export const chanagePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Chage Password" });
