const { Model, DataTypes, INTEGER } = require("sequelize");
const db = require("../config/db");

class Cart extends Model {}

Cart.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart;
