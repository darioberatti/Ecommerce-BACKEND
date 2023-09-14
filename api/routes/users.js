const express = require("express");
const { validateToken, generateToken } = require("../config/token");
const { validateUser, validateAdmin } = require("../middleware/auth");
const usersRouter = express.Router();
const { Users, Cart } = require("../models");

usersRouter.put("/:id", (req, res) => {
  const userId = req.params.id;

  Users.findByPk(userId).then((user) => {
    if (req.body.email || req.body.password) {
      return res
        .status(400)
        .send("No se pueden editar el email ni la contraseña");
    }
    user
      .update(req.body, {
        returning: true,
      })
      .then((response) => res.send(response))
      .catch((error) => {
        res.status(500).send("Error al actualizar el usuario");
      });
  });
});

usersRouter.get("/", (req, res) => {
  Users.findAll().then((user) => {
    res.send(user);
  });
});

usersRouter.post("/register", async (req, res, next) => {
  const { email } = req.body;
  try {
    const exists = await Users.findOne({ where: { email } });

    if (exists) return res.sendStatus(500);

    const createdUser = await Users.create(req.body);
    res.status(201).send(createdUser);
  } catch (error) {
    console.error(error);
  }
});

usersRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email } });
    const validatePassword = await user.validatePassword(password);

    if (validatePassword) {
      const userData = {
        id: user.id,
        email,
        name: user.name,
        lastname: user.lastname,
        isAdmin: user.isAdmin,
      };
      const token = await generateToken(userData);
      res.cookie("token", token).send(userData);
    } else {
      return res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
});

usersRouter.post("/logout", validateUser, (req, res) => {
  res.clearCookie("token").sendStatus(204);
});

usersRouter.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

usersRouter.get("/admin/all", validateUser, validateAdmin, (req, res) => {
  Users.findAll()
    .then((users) => res.send(users))
    .catch((err) => console.log(err));
});

usersRouter.get("/:id", (req, res) => {
  const userId = req.params.id;
  Users.findByPk(userId, {
    attributes: { exclude: ["password", "email"] },
  }).then((user) => {
    res.send(user);
  });
});

module.exports = usersRouter;
