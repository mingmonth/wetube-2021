import nanoexpress from "nanoexpress";

const app = nanoexpress();

const PORT = 3000;

const handleHome = (req, res) => {
  return res.send({ status: "ok" });
};

const handleProfile = (req, res) => {
  return res.send("handle profile2");
};

const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};

app.use(middleware);

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT);
