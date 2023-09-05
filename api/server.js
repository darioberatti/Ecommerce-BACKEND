// configuracion del SERVIDOR
const express = require("express");
const db = require("./config/db");

const routes = require("./routes");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/api", routes);

db.sync({ force: false })
  .then(function () {
    app.listen(PORT, () =>
      console.log(`Servidor escuchando en el puerto ${PORT}`)
    );
  })
  .catch(console.error);
