const express = require("express");
const { registerUser, loginUser, logout } = require("./user.controller");
const { validate, loggedInChecker, isAdminChecker } = require("../middleware/middlewares");

const { joiUserObject } = require("./user.validator");

const userRouter = express.Router();

// Register user
userRouter.post("/register", validate(joiUserObject), registerUser);

// Login user
userRouter.post("/login", loginUser);

userRouter.post("/logout", logout);

module.exports = { userRouter };
