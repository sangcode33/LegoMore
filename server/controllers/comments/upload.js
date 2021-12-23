const { comments } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  //  인증
  if (!isAuthorized(req)) {
    res.status(401).send({ message: "유효하지않은 토큰입니다." });
  } else if (
    req.body.nickname === undefined ||
    req.body.content === undefined
  ) {
    res.status(400).send({ message: "잘못된 요청입니다." });
  } else {
    // 새로운 댓글 생성
    const newComments = await comments.create({
      id: req.body.id,
      postId: req.body.postId,
      nickname: req.body.nickname,
      content: req.body.content,
    });
    //  댓글 생성 성공하면 201 created
    res.status(201).send({
      id: newComments.id,
      message: "확인",
    });
  }
};
