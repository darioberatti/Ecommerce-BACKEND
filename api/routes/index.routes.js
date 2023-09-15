const express = require("express");
const usersRouter = require("./users.routes");
const productsRouter = require("./products.routes");
const cartRouter = require("./cart.routes");
const categoriesRouter = require("./categories.routes");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/cart", cartRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
