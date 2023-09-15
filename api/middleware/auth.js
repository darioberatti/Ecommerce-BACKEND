const { validateToken } = require("../config/token");
const { Users } = require("../models");

async function validateUser(req, res, next) {
  let token = req.cookies.token;
  if (!token) {
    return res.sendStatus(401);
  }
  let data = validateToken(token);

  const user = await Users.findByPk(data.payload.id);

  req.user = {
    payload: {
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      address: user.address,
      isAdmin: user.isAdmin,
    },
  };

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
