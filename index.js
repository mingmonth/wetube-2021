import nanoexpress from "nanoexpress";

const app = nanoexpress();

const PORT = 3000;

app.get("/", (req, res) => {
  return res.send({ status: "ok" });
});

app.listen(PORT);
