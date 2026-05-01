const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .send({ user: { username: user.name }, token });
};

const login = (req, res) => {
  res.send("login user");
};

module.exports = { register, login };
