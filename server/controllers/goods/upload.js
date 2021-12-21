const { goods } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // 인증
  if (!isAuthorized(req)) {
    res.status(401).send({ message: "유효하지않은 토큰입니다." });
  } else if (
    req.body.title === undefined ||
    req.body.content === undefined ||
    req.body.image === undefined ||
    req.body.price === undefined ||
    req.body.status === undefined
  ) {
    res.status(400).send({ message: "잘못된 요청입니다." });
  } else {
    // 새로운 상품 생성
    const newGoods = await goods.create({
      id: req.body.id,
      userId: req.body.userId,
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      price: req.body.price,
      status: req.body.status,
    });
    // 상품 성공에 성공하면 201 created
    res.status(201).send({
      id: newGoods.id,
      message: "확인",
    });
  }
};
