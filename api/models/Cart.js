const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Cart extends Model {}

Cart.init(
  {
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    total: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deliveryStreets: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deliveryZipCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deliveryCity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reciever: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cardCompany: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cardNumber: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    cardCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cardName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart;
