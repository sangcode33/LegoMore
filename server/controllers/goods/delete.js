const { goods } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const auth = isAuthorized(req);
  // auth.id 와 게시물에있는 userId가 같다면 삭제가 가능하다.
  if (auth.id === req.body.userId) {
    await goods.destroy({
      where: { id: req.body.id },
    });
    res.status(200).send({
      id: req.body.id,
      message: "Goods Delete Ok",
    });
  } else if (auth.id !== req.body.userId) {
    res.status(401).send({ message: "Not Authorized" });
  } else {
    res.status(400).send({ message: "Bad request" });
  }
};
