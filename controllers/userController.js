export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editUser = (req, res) =>
  res.render("editUser", { pageTitle: "Edit User" });
export const chanagePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Chage Password" });
