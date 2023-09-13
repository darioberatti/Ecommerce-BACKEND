// configuracion del SERVIDOR
require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const models = require("./models");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:${process.env.FRONT_END_PORT}`,
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api", routes);

//Requerir los modelos desde index.js de models

db.sync({ force: false })
  .then(function () {
    app.listen(3001, () =>
      console.log(`Servidor escuchando en el puerto ${3001}`)
    );
  })
  .catch(console.error);
