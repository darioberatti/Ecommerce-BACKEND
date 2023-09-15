const Users = require("./Users");
const Cart = require("./Cart");
const Products = require("./Products");
const db = require("../config/db")
const { DataTypes } = require("sequelize");
const Categories = require("./Categories");

const cart_products = db.define("cart_products", {
  quantity:{ 
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
})

Products.belongsTo(Categories , { as: "category"})

Cart.belongsTo(Users, { as: "user" });
Cart.belongsToMany(Products, {through: cart_products})
Products.belongsToMany(Cart, {through: cart_products})

module.exports = { Cart, Users, Products, Categories, cart_products };
