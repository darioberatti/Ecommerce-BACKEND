const express = require("express");

const usersRouter = express.Router();
const { Users } = require("../models");

usersRouter.put("/:id", (req, res) => {
  const userId = req.params.id;

  Users.update(req.body, {
    where: {
      id: userId,
    },
    returning: true,
  })
    .then(([rowsAffected, newInstance]) => res.send(newInstance[0]))
    .catch((err) => console.error(err));
});

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

usersRouter.post("/logout", (req, res) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ mensaje: "Token no proporcionado" });
  }

  lista.push(token);

  res.json({ mensaje: "Logout exitoso" });
});

module.exports = usersRouter;
