const Products = require("../models/Products");

function seedDataBase() {
  Products.bulkCreate([
    {
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
      description:
        "Short Retro - Seleción Argentina - Mundial México 1986 - Maradona #10",
      urlImg: [
        "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_094654-7ac48f93ee7ac01bed16504593878704-1024-1024.webp",
        "https://acdn.mitiendanube.com/stores/216/721/products/short-afa-86-frente1-4be2c35f65d959e91216107476843214-1024-1024.webp",
      ],
    },
    {
      name: "Camiseta Retro Argentina",
      type: "camiseta",
      size: ["M", "XL", "S"],
      team: "Selección Argentina",
      country: "Argentina",
      year: 2006,
      price: 99.99,
      stock: 33,
      description:
        "Camiseta Retro - Seleción Argentina - Mundial Alemania 2006 - Riquelme #10",
      urlImg: [
        "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20230417_16264521-f59c3fa45a883a877616817599554439-1024-1024.webp",
        "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20230417_16273321-0376834174f7295c8116817599555204-1024-1024.webp",
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
        "https://acdn.mitiendanube.com/stores/216/721/products/holanda-fondo1-f619ae5775745fab9916349427844292-1024-1024.webp",
        "https://acdn.mitiendanube.com/stores/216/721/products/holanda-fondo-esp1-2ed88fd0917632d0b616349427845677-1024-1024.webp",
      ],
    },
  ]);
}

seedDataBase() ;
