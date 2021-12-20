const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
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
      id: userInfo.dataValues.id,
      email: userInfo.dataValues.email,
      nickname: userInfo.dataValues.nickname,
      createdAt: userInfo.dataValues.createdAt,
      updatedAt: userInfo.dataValues.updatedAt,
    };
    const accessToken = generateAccessToken(payload);
    sendAccessToken(res, accessToken);
  }
};
