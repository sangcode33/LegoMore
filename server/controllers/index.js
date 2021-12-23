module.exports = {
  auth: require("./users/auth"),
  delete: require("./users/delete"),
  modify: require("./users/modify"),
  signup: require("./users/signup"),
  signin: require("./users/signin"),
  signout: require("./users/signout"),

  // goods
  goodsUpload: require("./goods/upload"),
  goods: require("./goods/goods"),
  goodsDelete: require("./goods/delete"),
  goodsModify: require("./goods/modify"),
  goodsDetail: require("./goods/detail"),

  // comments
  commentsUpload: require("./comments/upload"),
  commentsDelete: require("./comments/delete"),
  comments: require("./comments/comments"),

  // likes
  likesUpload: require("./likes/upload"),
  likes: require("./likes/likes"),

  // oauth
  kakao: require("./oauth/kakao"),
};
