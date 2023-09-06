const Users = require("./Users");
const Cart = require("./Cart");
const Products = require("./Products");

Cart.belongsTo(Users, { as: "user" });
Cart.belongsToMany(Products, {through: 'cart_products'})
Products.belongsToMany(Cart, {through: 'cart_products'})

module.exports = { Cart, Users, Products };
