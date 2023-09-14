const express = require("express");
const cartRouter = express.Router();
const { validateUser } = require("../middleware/auth.js");
const { Cart, Products, Users } = require("../models");
const transporter = require("../config/mailer.js");

//RUTA PARA OBTENER TODOS LOS PRODUCTOS DEL CARRITO ACTIVO DE UN USER ESPECIFICO

cartRouter.get("/", validateUser, (req, res, next) => {
  const { email } = req.user.payload;

  Users.findOne({ where: { email } })
    .then((user) => {
      Cart.findOne({ where: { userId: user.id, completed: false } })
        .then((cart) => {
          if (!cart) return res.sendStatus(500).end();
          return cart.getProducts().then((items) => {
            res.send({ items, cart });
          });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});

// RUTA PARA AÑADIR PRODUCTO AL CARRITO

cartRouter.post("/:productId", validateUser, (req, res, next) => {
  const { email } = req.user.payload;

  const productId = req.params.productId;

  Users.findOne({ where: { email } }).then((user) => {
    Products.findByPk(productId)
      .then((product) => {
        if (!product)
          return res.status(404).json({ message: "Producto no encontrado" });

        Cart.findOne({ where: { userId: user.id, completed: false } })
          .then((cart) => {
            if (!cart) {
              return Cart.create(
                { userId: user.id, completed: false },
                { returning: true }
              ).then((cart) => {
                return cart;
              });
            }
            return cart;
          })
          .then((cart) => {
            cart.total += product.price;
            cart.save();
            cart.getProducts().then((allProducts) => {
              const existsOnCart = allProducts.find(
                (el) => el.id === product.id
              );
              if (existsOnCart) {
                const existingCartItem = existsOnCart.cart_products;
                existingCartItem.quantity += 1;
                return existingCartItem.save();
              } else {
                cart.addProduct(product);
              }
            });
          })
          .then(() => {
            res
              .status(201)
              .json({ message: "Producto agregado al carrito correctamente" });
          })
          .catch((error) => {
            next(error);
          });
      })
      .catch((error) => {
        next(error);
      });
  });
});

//Ruta para eliminar un producto del carrito PARA REVISAR JUNTO AL FRONT

cartRouter.delete("/:productId", validateUser, async (req, res, next) => {
  const { email } = req.user.payload;
  const { productId } = req.params;

  Users.findOne({ where: { email } })
    .then((findUser) => {
      if (!findUser) {
        return res.sendStatus(404).end();
      }

      Products.findByPk(productId)
        .then((findProduct) => {
          if (!findProduct) {
            return res.sendStatus(404).end();
          }

          Cart.findOne({ where: { userId: findUser.id } })
            .then((findCart) => {
              if (!findCart) {
                return res.sendStatus(500).end();
              }

              findCart.getProducts()
                .then((totalItemsInCart) => {
                  const existsOnCart = totalItemsInCart.find(
                    (product) => product.id === findProduct.id
                  );

                  if (!existsOnCart) {
                    return res.sendStatus(404).end();
                  }

                  const existingCartItem = existsOnCart.cart_products;

                  if (existingCartItem.quantity > 1) {
                    existingCartItem.quantity -= 1;
                    existingCartItem.save()
                      .then(() => {
                        findCart.total -= findProduct.price;
                        findCart.save()
                          .then(() => {
                            res.status(200).end();
                          })
                          .catch((err) => {
                            next(err);
                          });
                      })
                      .catch((err) => {
                        next(err);
                      });
                  } else {
                    findCart.removeProduct(findProduct)
                      .then(() => {
                        findCart.total -= findProduct.price;
                        findCart.save()
                          .then(() => {
                            res.status(200).end();
                          })
                          .catch((err) => {
                            next(err);
                          });
                      })
                      .catch((err) => {
                        next(err);
                      });
                  }
                })
            })
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
});

//Ruta que actualiza un cart, la usamos para realizar el checkout, confirmar la compra y enviar el mail
cartRouter.put("/:id", validateUser, (req, res) => {
  const cartId = req.params.id;

  Cart.findByPk(cartId).then((cart) => {
    cart
      .update(req.body, {
        returning: true,
      })
      .then((response) => {
        Users.findByPk(response.userId).then((user) => {
          transporter.sendMail({
            from: '"Retro Futbol Club" <e.retrofutbolclub@gmail.com>', // sender address
            to: `${user.email}`, // list of receivers
            subject: "Confirmacion de Compra Retro F.C.", // Subject line
            html: `<h2>Hola ${user.name}! Tu compra fue realizada con éxito</h2>
            <p>En los próximos días estarás recibiendo tus productos en ${response.deliveryAddress} , ${response.deliveryCity}.</p>
            <p>Tu código de compra por cualquier inconveniente es: ${response.id}</p>
            <h4><b>Muchisimas gracias por confiar en nosotros!</b></h4>
            <p>Retro F.C.</p>`,
          });
        });
        response;
      })
      .then((response) => res.status(200).send(response))
      .catch((err) => console.error(err));
  });
});



cartRouter.get("/:cartId", (req, res) => {
  Cart.findOne({ where: { id: req.params.cartId } })
    .then((cart) => cart.getProducts())
    .then((allProducts) => res.send(allProducts))
    .catch((err) => console.log(err));
});

module.exports = cartRouter;