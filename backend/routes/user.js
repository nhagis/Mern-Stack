const express = require("express");
const route = express.Router();
const User = require("../models/userModel");
const { loginUser, signUpUser } = require("../controller/userController");

route.post("/login", loginUser);
route.post("/signUp", signUpUser);

module.exports = route;
