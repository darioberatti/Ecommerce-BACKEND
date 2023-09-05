const express = require("express");
const Users = require("../models/Users");

const usersRouter = express.Router();

usersRouter.post("/register", (req, res, next) => {
  Users.create(req.body)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((error) => {
      next(error);
    });
});

usersRouter.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  Users.findOne({ where: { email } }).then((user) => {
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

module.exports = usersRouter;
