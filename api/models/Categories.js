const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Categories extends Model {}

Categories.init(
  {
    type: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "categories" }
);

module.exports = Categories;
