const express = require("express");
const productsRouter = express.Router();
const { Users, Products, Cart } = require("../models");

productsRouter.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Products.findByPk(id)
    .then((product) => {
      res.send(product);
    })
    .catch((err) => next(err));

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
