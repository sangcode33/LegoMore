require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    const token = sign(data, process.env.ACCESS_SECRET, {
      expiresIn: "1d",
    });
    return token;
  },
  sendAccessToken: (res, accessToken) => {
    return res
      .cookie("jwt", accessToken)
      .status(200)
      .send({
        data: {
          accessToken: accessToken,
        },
        message: "Ok",
      });
  },
  isAuthorized: (req) => {
    // console.log("tokenFunctionIndex : ", req.cookies.jwt);
    const token = req.cookies.jwt;
    const userinfo = verify(
      token,
      process.env.ACCESS_SECRET,
      (err, decoded) => {
        if (decoded) {
          return decoded;
        }
      }
    );
    return userinfo;
  },
};
