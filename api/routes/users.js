const express = require("express")
const usersRouter = express.Router()

usersRouter.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.send(401);
      const userData = {
        email: email,
        name: user.name,
        lastname: user.lastname,
      };
      const token = generateToken(userData);
      res.cookie("token", token).send(userData);
    });
  });
});