const { comments } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const commentsAuth = isAuthorized(req);
  // commentsAuth.id 와 게시물에있는 userId가 같다면 삭제가 가능하다.
  if (commentsAuth.id === req.body.postId) {
    await comments.destroy({
      where: { id: req.body.id },
    });
    res.status(200).send({
      id: req.body.postId,
      message: "comments Delete Ok",
    });
  } else if (commentsAuth.id !== req.body.postId) {
    res.status(401).send({ message: "Not Authorized" });
  } else {
    res.status(400).send({ message: "Bad request" });
  }
};
