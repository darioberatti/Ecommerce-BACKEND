const { validateToken } = require("../config/token");

function validateUser(req, res, next) {
  let token = req.cookies.token;
  let data = validateToken(token);

  req.user = data;

  if (data) return next();

  res.sendStatus(401);
}

module.exports = validateUser;
