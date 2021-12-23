const { likes, user, goods } = require("../../models");

module.exports = (req, res) => {
  console.log("찜목록 조회");
  // const likesInfo = likes.findAll({
  //   include: [
  //     { model: user, as: "user", attribute: ["id"] },
  //     { model: goods, as: "goods", attribute: ["id"] },
  //   ],
  // });
  // console.log("이런게됌? : ", likesInfo);
};
