const { UnauthenticatedError } = require("../errors");
// const User = require("../models/user");
const jwt = require("jsonwebtoken");

auth = (req, res, next) => {
  authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user to the job routes

    // const user = User.findById(payload.id).select("-password");
    // req.user = user;

    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

module.exports = auth;
