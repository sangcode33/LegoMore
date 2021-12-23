const { likes } = require("../../models");

module.exports = async (req, res) => {
  console.log("server likes : ", req.body);
  if (req.body.userId === undefined || req.body.goodsId === undefined) {
    res.status(400).send({ message: "Bad request" });
  } else {
    likes
      .findOrCreate({
        where: { userId: req.body.userId, postId: req.body.goodsId },
      })
      .then(([likes, created]) => {
        if (created) {
          res.status(201).send({ message: "Likes Ok", data: likes.dataValues });
        } else {
          res.status(400).send({ message: "이미 찜목록에 존재합니다." });
        }
      });
  }
};
