const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.put("/:id", (req, res) => {
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
