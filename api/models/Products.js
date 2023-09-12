const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Products extends Model {}

Products.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    rate: {
      type: DataTypes.INTEGER,
    },
    reviews: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    urlImg: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "products" }
);

module.exports = Products;
