const Categories = require("../models/Categories");

function seedDataBaseCategories() {
  Categories.bulkCreate([
    {
      type: "Camisetas",
    },
    {
      type: "Buzos",
    },
    {
      type: "Shorts",
    },
    {
      type: "Pantalones",
    },
  ]);
}

seedDataBaseCategories();