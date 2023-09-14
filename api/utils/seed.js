const { Users, Products, Categories } = require("../models");


async function seedDataBaseCategories() {
  try {
    await Categories.bulkCreate([
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
  } catch (error) {
    console.error("Error al sembrar categorías:", error);
  }
}

async function seedDataBase() {
  try {
    await seedDataBaseCategories(); // Espera a que se completen las categorías
    await Users.create({
      isAdmin: true,
      name: "Admin",
      lastName: "Retro",
      userName: "admin1",
      address: "direccion 123",
      email: "e.retrofutbolclub@gmail.com",
      password: "123456",
      history: [],
      salt: "",
    });

    await Products.bulkCreate([
      {
        name: "Camiseta Retro Newell´s Maradona",
        categoryId: 1,
        size: ["L"],
        team: "Newell´s Old Boys",
        country: "Argentina",
        year: 1993,
        price: 99.99,
        stock: 100,
        description: "Camiseta Retro - Newell´s Old Boys - Maradona #10 - 1993",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_092710-5342fc330e2a5cbc2716504584747851-1024-1024.webp",
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_092637-25e7dcca9b63ef54b616504584747652-1024-1024.webp",
        ],
      },
      {
        name: "Buzo Retro Entrenamiento Argentina",
        categoryId: 2,
        size: ["L"],
        team: "Selección Argentina",
        country: "Argentina",
        year: 1994,
        price: 129.99,
        stock: 33,
        description: "Buzo Retro - Entrenamiento Argentina - Mundial USA 1994",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220519_093706-ba5a910eddf4d4547116533441127302-1024-1024.webp",
        ],
      },
      {
        name: "Camiseta Retro River Plate",
        categoryId: 1,
        size: ["L"],
        team: "River Plate",
        country: "Argentina",
        year: 1996,
        price: 99.99,
        stock: 33,
        description: "Camiseta Retro - River Plate - Tricampeón - 1996/1997",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220426_0942481-f2f768f1a79e1835a216886794215806-1024-1024.webp",
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220426_0943121-a59c5042a60f03fadf16886794215805-1024-1024.webp",
        ],
      },
      {
        name: "Short Retro Boca Juniors",
        categoryId: 3,
        size: ["L"],
        team: "Boca Juniors",
        country: "Argentina",
        year: 1995,
        price: 49.99,
        stock: 33,
        description: "Short Retro - Boca Juniors - Maradona #10 - 1995",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_094746-bc4818946ac5748d2d16504596832834-1024-1024.webp",
        ],
      },
      {
        name: "Camiseta Retro Boca Juniors",
        categoryId: 1,
        size: ["L"],
        team: "Boca",
        country: "Argentina",
        year: 2001,
        price: 99.99,
        stock: 33,
        description: "Camiseta Retro - Boca Juniors - Libertadores 2001",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20230222_1844111-7e6869e3b187588db816771167010135-1024-1024.webp",
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20230222_1901431-0011e08a8f5bab3d1716771167011081-1024-1024.webp",
        ],
      },
      {
        name: "Camiseta Retro River Plate",
        categoryId: 1,
        size: ["L"],
        team: "River Plate",
        country: "Argentina",
        year: 1999,
        price: 99.99,
        stock: 33,
        description: "Camiseta Retro - River Plate - Tricolor - 1999",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/river-tricolor-frente1-bc2e7e43af52d44f5e16129179482050-1024-1024.webp",
          "https://acdn.mitiendanube.com/stores/216/721/products/river-tricolor-espalda1-6cb0c8209c99582f3b16129179483302-1024-1024.webp",
        ],
      },
      {
        name: "Short Retro Argentina",
        categoryId: 3,
        size: ["L"],
        team: "Selección Argentina",
        country: "Argentina",
        year: 1986,
        price: 49.99,
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
        categoryId: 1,
        size: ["L"],
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
        name: "Camiseta Retro Boca Juniors",
        categoryId: 1,
        size: ["L"],
        team: "Boca",
        country: "Argentina",
        year: 2007,
        price: 99.99,
        stock: 33,
        description:
          "Camiseta Retro - Boca Juniors - Libertadores 2007 - Riquelme #10",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20230803_1523581-341c647f4451a39f7b16911958545344-1024-1024.webp",
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20230803_15242911-bfb41a90873743e32116911958724530-1024-1024.webp",
        ],
      },
      {
        name: "Camiseta Retro Independiente",
        categoryId: 1,
        size: ["L"],
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
        name: "Camiseta Retro River Plate",
        categoryId: 1,
        size: ["L"],
        team: "River Plate",
        country: "Argentina",
        year: 1992,
        price: 99.99,
        stock: 33,
        description: "Camiseta Retro - River Plate - 1992",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20230527_1510011-4f0626618e00c7568316852111126600-1024-1024.webp",
        ],
      },
      {
        name: "Short Retro Argentina",
        categoryId: 3,
        size: ["L"],
        team: "Selección Argentina",
        country: "Argentina",
        year: 1994,
        price: 49.99,
        stock: 33,
        description:
          "Short Retro - Seleción Argentina - Mundial USA 1994 - Maradona #10",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220406_115150-260a6351144feef3ea16650648843413-1024-1024.webp",
        ],
      },
      {
        name: "Buzo Retro Boca Juniors",
        categoryId: 2,
        size: ["L"],
        team: "Boca",
        country: "Argentina",
        year: 1981,
        price: 99.99,
        stock: 33,
        description: "Buzo Retro - Boca Juniors - Metropolitano 1981",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/camperita-boca-81-frente1-6410cb2b4a32e48a0216179036602496-1024-1024.webp",
          "https://acdn.mitiendanube.com/stores/216/721/products/camperita-boca-81-espaldaa1-8a9d5fdc4541a0472116179036601980-1024-1024.webp",
        ],
      },
      {
        name: "Camiseta Retro Holanda",
        categoryId: 1,
        size: ["L"],
        team: "Selección Holanda",
        country: "Holanda",
        year: 1983,
        price: 99.99,
        stock: 33,
        description: "Camiseta Retro - Selección Holanda 1983",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/holanda-fondo1-f619ae5775745fab9916349427844292-1024-1024.webp",
          "https://acdn.mitiendanube.com/stores/216/721/products/holanda-fondo-esp1-2ed88fd0917632d0b616349427845677-1024-1024.webp",
        ],
      },
      {
        name: "Camiseta Retro Independiente",
        categoryId: 1,
        size: ["L"],
        team: "Independiente",
        country: "Argentina",
        year: 1978,
        price: 99.99,
        stock: 33,
        description: "Camiseta Retro - Independiente - Bochini #10 1978",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220420_092212-2fcd1151e5c14f2cde16504581648660-1024-1024.webp",
        ],
      },
      {
        name: "Camiseta Retro Boca Juniors",
        categoryId: 1,
        size: ["L"],
        team: "Boca",
        country: "Argentina",
        year: 1981,
        price: 99.99,
        stock: 33,
        description: "Camiseta Retro - Boca Juniors - Metropolitano 1981",
        urlImg: [
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220406_084820-359bb29302444e6f5216492753616594-1024-1024.webp",
          "https://acdn.mitiendanube.com/stores/216/721/products/photoroom-20220406_084930-4739cf4747dbb5c31716492753616613-1024-1024.webp",
        ],
      },
    ]);
  } catch (error) {
    console.error("Error al sembrar la base de datos:", error);
  }
}

seedDataBase();
