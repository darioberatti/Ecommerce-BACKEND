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