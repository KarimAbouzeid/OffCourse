const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("HERE");
  res.json({ message: "KIMO ELBOSS" });
});
module.exports = router;
