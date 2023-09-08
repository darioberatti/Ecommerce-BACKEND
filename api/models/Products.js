const { DataTypes, Model, STRING, INTEGER } = require("sequelize");
const db = require("../config/db");

class Products extends Model {}

Products.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
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
      type: STRING,
      allowNull: false,
    },
    year: {
      type: INTEGER,
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

/* Products.bulkCreate([{
  name: "Camiseta Retro Maradona 1993",
  type: "camiseta",
  size: ["M", "XL", "S"],
  team: "Newell´s",
  country: "Argentina",
  year: 1993,
  price: 39.99,
  stock: 100,
  description: "Camiseta Retro de Newell´s - Maradona #10 - 1993",
  urlImg: [
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_092710-5342fc330e2a5cbc2716504584747851-1024-1024.webp",
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_092637-25e7dcca9b63ef54b616504584747652-1024-1024.webp",
  ],
},
{
  name: "Buzo Retro Entrenamiento Argentina",
  type: "buzo",
  size: ["M", "XL", "S"],
  team: "Selección Argentina",
  country: "Argentina",
  year: 1994,
  price: 99.99,
  stock: 33,
  description: "Buzo Retro - Entrenamiento Argentina - Mundial USA 1994",
  urlImg: [
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220519_093706-ba5a910eddf4d4547116533441127302-1024-1024.webp",
  ],
},
{
  name: "Camiseta Retro River Plate",
  type: "camiseta",
  size: ["M", "XL", "S"],
  team: "River Plate",
  country: "Argentina",
  year: 1996,
  price: 99.99,
  stock: 33,
  description: "Camiseta Retro - River Plate tricampeón - 1996/1997",
  urlImg: [
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220426_0942481-f2f768f1a79e1835a216886794215806-1024-1024.webp",
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220426_0943121-a59c5042a60f03fadf16886794215805-1024-1024.webp",
  ],
},
{
  name: "Camiseta Retro Boca Juniors",
  type: "camiseta",
  size: ["M", "XL", "S"],
  team: "Boca",
  country: "Argentina",
  year: 2010,
  price: 99.99,
  stock: 33,
  description: "Camiseta Retro - Boca Juniors - Libertadores 2001",
  urlImg: [
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20230222_1844111-7e6869e3b187588db816771167010135-1024-1024.webp",
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20230222_1901431-0011e08a8f5bab3d1716771167011081-1024-1024.webp",
  ],
},
{
  name: "Short Retro Argentina",
  type: "short",
  size: ["M", "XL", "S"],
  team: "Selección Argentina",
  country: "Argentina",
  year: 1986,
  price: 99.99,
  stock: 33,
  description: "Short Retro - Seleción Argentina - Mundial México 1986 - Maradona #10",
  urlImg: [
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_094654-7ac48f93ee7ac01bed16504593878704-1024-1024.webp",
    "https://acdn.mitiendanube.com/stores/216/721/products/short-afa-86-frente1-4be2c35f65d959e91216107476843214-1024-1024.webp",
  ],
},
{
  name: "Camiseta Retro Independiente",
  type: "camiseta",
  size: ["M", "XL", "S"],
  team: "Independiente",
  country: "Argentina",
  year: 1987,
  price: 99.99,
  stock: 33,
  description: "Camiseta Retro - Independiente - Bochini 1987",
  urlImg: [
    "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_092212-2fcd1151e5c14f2cde16504581648660-1024-1024.webp",
  ],
},
{
  name: "Camiseta Retro Holanda",
  type: "camiseta",
  size: ["M", "XL", "S"],
  team: "Selección Holanda",
  country: "Holanda",
  year: 1983,
  price: 99.99,
  stock: 33,
  description: "Camiseta Retro - Holanda 1983",
  urlImg: [
    "https://static.nike.com/a/images/t_default/28bcabff-a756-4a0c-8f2d-e95a261a6228/pantalones-fc-barcelona-jdi-qQ4Md0.png",
    "https://ejemplo.com/pantalon2.jpg",
  ],
}]) */



module.exports = Products;
