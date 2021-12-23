const { goods } = require("../../models");

module.exports = async (req, res) => {
  // 상품 조회
  const getGoods = await goods.findAll();
  res.status(200).send({ data: getGoods, message: "Goods Get Ok" });
};
