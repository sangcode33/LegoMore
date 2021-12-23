const { goods } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const auth = isAuthorized(req);
  // delete와 마찬가지로 auth.id와 req.body.userId가 같으면 수정가능
  if (auth.id === req.body.userId) {
    await goods.update({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      price: req.body.price,
      status: req.body.status,
    });
    res.status(200).send({ message: "Goods Update Ok" });
  } else if (auth.id !== req.body.userId) {
    res.status(401).send({ message: "Not Authorized" });
  } else {
    res.status(400).send({ message: "Bad request" });
  }
};
