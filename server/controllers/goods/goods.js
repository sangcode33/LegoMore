const { goods } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  req.params;
  // 상품 조회
  const getGoods = await goods.findOne({
    where: { id: req.body.id },
  });
};
