const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = 4000;

const controllers = require("./controllers");

app.use(express.json());
// 좀 찾아보기로 밑에꺼
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "OPTION", "PUT"],
  })
);

app.use(cookieParser());
app.get("/users/auth", controllers.auth);
app.delete("/users/auth", controllers.delete);
app.put("/users/auth", controllers.modify);
app.post("/users/signup", controllers.signup);
app.post("/users/signin", controllers.signin);
app.get("/users/signout", controllers.signout);

// Goods
app.post("/goods/upload", controllers.upload);
app.get("/goods/goods-auth", controllers.goods);
app.delete("/goods/goods-auth", controllers.delete);
app.put("/goods/goods-auth", controllers.modify);

// Comments
app.get("/comments/comments-auth", controllers.comments);
app.post("/comments/upload", controllers.upload);
app.delete("/comments/comments-auth", controllers.delete);

module.exports = app.listen(port, () => {
  console.log(` Server is starting on ${port}`);
});
