const User = require("../models/userModel");

const loginUser = async (req, res) => {
  res.json({ msg: "User is Login" });
};

const signUpUser = async (req, res) => {
  res.json({ msg: "User is SignUp" });
};

module.exports = { loginUser, signUpUser };
