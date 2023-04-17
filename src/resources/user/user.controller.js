const bcrypt = require("bcrypt");
const { UserModel } = require("./user.model");

//skapa ett nytt konto.
async function registerUser(req, res, next) {
  const registeredUser = await UserModel.findOne({
    username: req.body.username,
  });
  if (registeredUser) {
    return res.status(409).json("That email is already registered");
  }

  try {
    const user = await new UserModel(req.body);
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    const resUser = {
      username: user.username,
      _id: user._id,
      isAdmin: user.isAdmin,
    };

    res.status(201).json(resUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
}

//En funktion för att kunna logga in som användare.
async function loginUser(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(401).json("Wrong username , try again.");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json("Wrong password,try again.");
    }
    req.session = user;
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}
//En funktion för att kunna logga ut.
async function logout(req, res) {
  try {
    req.session = null;
    res.status(204).json("Successfully logged out");
  } catch (error) {
    next(error);
  }
}

//exportera alla funktioner
module.exports = { registerUser, loginUser, logout };
