const express = require("express");
const productsRouter = express.Router();
const { Products } = require("../models");

productsRouter.put("/:id", (req, res) => {
  const productId = req.params.id;

  Products.findByPk(productId).then((product) => {
    product
      .update(req.body, {
        returning: true,
      })
      .then((response) => res.status(200).send(response))
      .catch(err=>console.error(err))
  });
});
