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

module.exports = usersRouter;
