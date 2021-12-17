const { user } = require("../../models");

module.exports = (res, req) => {
  const userInfo = user.destroy({
    where: { id: 1 },
  });

  console.log(userInfo);

  res
    // .cookie("jwt", null, { maxAge: 0 })
    .status(200)
    .json({ id: 1 });
};
