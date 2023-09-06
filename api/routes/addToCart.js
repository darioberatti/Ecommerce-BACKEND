const express = require("express");
const cartRouter = express.Router();
const { Cart, Products } = require("../models"); 

// Ruta para agregar un producto al carrito
cartRouter.post("/cart/:productId", (req, res, next) => {
  const { user } = req; 

  const productId = req.params.productId;
  Products.findByPk(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      
      Cart.findOne({ where: { userId: user.id } })
        .then((cart) => {
          if (!cart) {
            return Cart.create({ userId: user.id, completed: false });
          }
          return cart;
        })
        .then((cart) => {
         
          return cart.addProduct(product);
        })
        .then(() => {
          res.status(201).json({ message: "Producto agregado al carrito correctamente" });
        })
        .catch((error) => {
          next(error);
        });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = cartRouter;
