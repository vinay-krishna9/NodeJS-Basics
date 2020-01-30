const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../Models/User");

router.get("/", verify, async (req, res) => {
  const user = await User.find();
  res.send(user);
  // res.send(req.user);
});

module.exports = router;
