const { validateToken } = require("../config/token");
const { Users } = require("../models");

function validateUser(req, res, next) {
  let token = req.cookies.token;
  let data = validateToken(token);

  req.user = data;

  if (data) return next();

  res.sendStatus(401);
}

function validateAdmin(req, res, next) {
  const email = req.user.payload.email;
  Users.findOne({ where: { email } }).then((user) => {
    return user.isAdmin ? next() : res.sendStatus(401);
  });
}

module.exports = { validateUser, validateAdmin };
