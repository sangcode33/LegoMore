const { goods } = require("../../models");

module.exports = async (req, res) => {
  // console.log("server detail : ", req.params);
  const goodsInfo = await goods.findOne({
    where: { id: req.params.id },
  });
  // console.log("server goodsInfo : ", goodsInfo);
  res.status(200).send({ data: goodsInfo, message: "Goods Detail Ok" });
};
