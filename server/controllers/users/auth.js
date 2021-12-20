const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = (req, res) => {
  // console.log("서버 auth로 왔는지?");
  console.log("req에 뭐가있냐? ", req);
  const accessTokenData = isAuthorized(req);
  // console.log("server auth : ", accessTokenData);

  if (!accessTokenData) {
    res.status(401).send({ data: null, message: "Not Authorized" });
  } else {
    res.status(200).send({ data: { userInfo: accessTokenData } });
  }
};
