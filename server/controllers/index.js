module.exports = {
  auth: require("./users/auth"),
  delete: require("./users/delete"),
  modify: require("./users/modify"),
  signup: require("./users/signup"),
  signin: require("./users/signin"),
  signout: require("./users/signout"),

  // goods
  upload: require("./goods/upload"),
  goods: require("./goods/goods"),
  delete: require("./goods/delete"),
  modify: require("./goods/modify"),

  // comments
  upload: require("./comments/upload"),
  delete: require("./comments/delete"),
  modify: require("./comments/modify"),
};
