const express = require("express");
const app = express();
const router = require("./router/index");
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(80, () => {
  console.log("http://127.0.0.1 is running");
});
