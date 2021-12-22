const axios = require("axios");

module.exports = (req, res) => {
  console.log(req.body.access_token); // 7MyXkeN6C5pnd-SUFSJ1_-UxdUiOLFbuQGlwVgo9dVoAAAF94CQ7zw
  const token = req.body.access_token;
  axios
    .get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
    .then((data) => {
      console.log("get res : ", data);
      res.status(200).send({ data: data.data, message: "Kakao Ok" });
    });
};
