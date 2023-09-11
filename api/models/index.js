const Users = require("./Users");
const Cart = require("./Cart");
const Products = require("./Products");
const db = require("../config/db")
const { DataTypes } = require("sequelize")

const cart_products = db.define("cart_products", {
  quantity:{ 
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
})

Cart.belongsTo(Users, { as: "user" });
Cart.belongsToMany(Products, {through: cart_products})
Products.belongsToMany(Cart, {through: cart_products})

module.exports = { Cart, Users, Products, cart_products };
