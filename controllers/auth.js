const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");

const register = (req, res) => {
  res.status(StatusCodes.CREATED).send(req.body);
};

const login = (req, res) => {
  res.send("login user");
};

module.exports = { register, login };
