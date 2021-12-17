const { user } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const userInfo = req.body;
  if (
    userInfo.email === undefined ||
    req.body.nickname === undefined ||
    req.body.password === undefined
  ) {
    res.status(400).send({ message: "잘못된 요청" });
  } else {
    user
      .findOrCreate({
        where: { email: userInfo.email },
        defaults: { password: userInfo.password, nickname: userInfo.nickname },
      })
      .then(([users, created]) => {
        // created - true => 11번째줄 where에 해당하는 email이 없어서 새로 만들어줌.
        // created - false => 11번째줄에 where에 해당하는 email이 있어서 만들지 않음.
        if (created) {
          const payload = {
            // 추후에 데이터를 받아오는것 보고 수정
            id: users.dataValues.id,
            email: users.dataValues.email,
            nickname: users.dataValues.nickname,
            createdAt: users.dataValues.createdAt,
            updatedAt: users.dataValues.updatedAt,
          };

          const token = generateAccessToken(payload);
          res
            .cookie("jwt", token, {
              httpOnly: true,
              sameSite: "none",
              secure: true,
            })
            .status(201)
            .send({ message: "Ok" });
        } else {
          res.status(409).send({ message: "Email Exists" });
        }
      });
  }
};
