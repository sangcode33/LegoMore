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
      .cookie("jwt", accessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send({
        message: "Ok",
      });
  },
  isAuthorized: (req) => {
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
