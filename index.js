import nanoexpress from "nanoexpress";
import morgan from "morgan";
import helmet from "helmet";

const app = nanoexpress();

const PORT = 3000;

const handleHome = (req, res) => {
  return res.send({ status: "ok" });
};

const handleProfile = (req, res) => {
  return res.send("handle profile2");
};

const middleware = (req, res, next) => {
  return res.send("not happening!!!");
};

app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);
app.get("/profile", middleware, handleProfile);

app.listen(PORT);
