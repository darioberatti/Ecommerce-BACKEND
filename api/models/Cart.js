const { Model, DataTypes, INTEGER } = require("sequelize");
const db = require("../config/db");

class Cart extends Model {}

Cart.init(
  {
    // Mateo: "Comente esta prop porque al hacer la relacion Cart belnogs to Users se autogenera una columna de userId"
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
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
