const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = 4000;

const controllers = require("./controllers");

// 좀 찾아보기로 밑에꺼
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "OPTION", "PUT", "DELETE"],
  })
);

app.use(cookieParser());
app.get("/users/auth", controllers.auth);
app.delete("/users/:id", controllers.delete);
app.put("/users/:id", controllers.modify);
app.post("/users/signup", controllers.signup);
app.post("/users/signin", controllers.signin);
app.get("/users/signout", controllers.signout);

// Goods
app.post("/goods/upload", controllers.goodsUpload);
app.get("/goods/:id", controllers.goods); // 게시물 하나만 불러올떄
app.delete("/goods/:id", controllers.goodsDelete);
app.put("/goods/:id", controllers.goodsModify);

// Comments
app.get("/comments/comments-auth", controllers.comments);
app.post("/comments/upload", controllers.commentsUpload);
app.delete("/comments/:id", controllers.commentsDelete);

module.exports = app.listen(port, () => {
  console.log(` Server is starting on ${port}`);
});
