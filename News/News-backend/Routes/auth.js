const router = require("express").Router();
const UserModel = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  registrationValidation,
  loginValidation
} = require("../Helpers/validation");

router.post("/register", async (req, res) => {
  const { error } = registrationValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const checkEmail = await UserModel.findOne({ Email: req.body.Email });
  if (checkEmail) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.Password, salt);

  const newUser = new UserModel({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Password: hashedPassword
  });

  try {
    const user = await newUser.save();
    res.status(200).send({ user: user._id });
  } catch (err) {
    res.send({ message: err });
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await UserModel.findOne({ Email: req.body.Email });
  if (!user)
    return res.status(404).send("User not found. Make sure you're registered.");

  const validPassword = await bcrypt.compare(req.body.Password, user.Password);
  if (!validPassword)
    return res.status(400).send("Email or password incorrect.");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({ token: token });
});

module.exports = router;
