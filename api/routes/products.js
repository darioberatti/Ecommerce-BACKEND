const express = require("express");
const router = express.Router();
const { Products } = require("../models");

// Ruta para obtener todos los productos
router.get("/", (req, res, next) => {
  Products.findAll()
    .then((productos) => {
      res.status(200).json(productos);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;