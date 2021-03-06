import nanoexpress from "nanoexpress";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = nanoexpress();

const handleHome = (req, res) => {
  return res.send({ status: "ok" });
};

const handleProfile = (req, res) => {
  return res.send("handle profile2");
};

// const middleware = (req, res, next) => {
//   return res.send("not happening!!!");
// };

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);
app.get("/profile", handleProfile);

const userRouterPrefix = "/user/";

app.get(userRouterPrefix, (req, res) => res.send("user root"));
app.get(userRouterPrefix + "edit", (req, res) => res.send("user edit"));
app.get(userRouterPrefix + "password", (req, res) => res.send("user password"));

export default app;
