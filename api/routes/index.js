const express = require("express");
const usersRouter = require("./users");
const productsRouter = require("./products");
const cartRouter = require("./cart");
const categoriesRouter = require("./categories")

const router = express.Router()

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/cart", cartRouter);
router.use("/categories", categoriesRouter);


module.exports = router;
