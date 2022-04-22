const express = require("express");
const router = express.Router();
router.get("/login", (req, res) => {
  const query = req.query;
  res.send({
    status: 1,
    msg: "请求成功，获取到数据",
    data: query,
  });
});
router.post("/register", (req, res) => {
  const body = req.body;
  res.send({
    status: 1,
    msg: "请求成功，获取到数据",
    data: body,
  });
});
module.exports = router;
