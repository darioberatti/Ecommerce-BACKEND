// configuracion del SERVIDOR
const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const models = require("./models");

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api", routes);

//Requerir los modelos desde index.js de models

db.sync({ force: false })
  .then(function () {
    app.listen(PORT, () =>
      console.log(`Servidor escuchando en el puerto ${PORT}`)
    );
  })
  .catch(console.error);
