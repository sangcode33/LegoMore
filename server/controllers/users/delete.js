const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (res, req) => {
  const userinfo = isAuthorized(req);
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
  console.log("accessTokenData : ", accessTokenData);
  // isAuthorized함수에서 데이터를 잘 받아왔으면 accessTokenData에 유저정보가 담겨있고 그렇지 않으면 마찬가지로 undefined가 담겨있음.

  if (!userinfo) {
    res.status(401).send({ message: "Not Authorized" });
  } else {
    await user.destroy({
      where: { id: userinfo.id },
    });
    res.status(200).send({ message: "User Delete Ok" });
  }
};
