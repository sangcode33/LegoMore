const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = 4000;

const controllers = require("./controller");

app.use(express.json());
// 좀 찾아보기로 밑에꺼
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTION", "PUT"],
  })
);

app.use(cookieParser());
app.get("/auth", controllers.auth);
app.post("/signup", controllers.signup);
app.post("/signin", controllers.signin);
app.post("/signout", controllers.signout);

module.exports = app.listen(port, () => {
  console.log(` Server is starting on ${port}`);
});
