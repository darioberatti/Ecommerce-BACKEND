const express = require("express");
const { Products } = require("../models");
const productsRouter = express.Router();

productsRouter.post("/create", (req, res, next) => {
  Products.create(req.body)
    .then((newProduct) => {
      res.status(201).json(newProduct);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = productsRouter;
