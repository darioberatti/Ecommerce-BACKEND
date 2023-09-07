const express = require("express");
const { validateToken, generateToken } = require("../config/token");
const validateUser = require("../middleware/auth");
const usersRouter = express.Router();
const { Users } = require("../models");

usersRouter.put("/:id", (req, res) => {
  const userId = req.params.id;

  Users.findByPk(userId).then((user) => {
    user
      .update(req.body, {
        returning: true,
      })
      .then((response) => res.send(response));
  });
});

// usersRouter.get("/:id", (req, res) => {
//   Users.findByPk(req.params.id).then((user) => {
//     res.send(user);
//   });
// });

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

usersRouter.post("/logout", validateUser, (req, res) => {
  res.clearCookie("token").sendStatus(204);
});

usersRouter.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

module.exports = usersRouter;
