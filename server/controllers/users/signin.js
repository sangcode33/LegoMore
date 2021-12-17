const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const userInfo = await user.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  if (!userInfo) {
    res.status(401).send({
      message: "Not authorized",
    });
  } else {
    const payload = {
      id: req.body.id,
      email: req.body.email,
      nickname: req.body.nickname,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    };
    const accessToken = generateAccessToken(payload);
    sendAccessToken(res, accessToken);
  }
};
