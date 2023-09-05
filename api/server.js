// configuracion del SERVIDOR
const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const routes = require("./routes");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/api", routes);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

//Requerir los modelos desde index.js de models

db.sync({ force: false })
  .then(function () {
    app.listen(PORT, () =>
      console.log(`Servidor escuchando en el puerto ${PORT}`)
    );
  })
  .catch(console.error);
