const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // console.log("res.cookies : ", req.cookies);
  // console.log("req.body : ", req.body);

  await user.destroy({
    where: { id: req.body.id },
  });
  res.status(200).send({ message: "Delete Ok" });
};
